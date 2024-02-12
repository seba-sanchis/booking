"use server";

import { client } from "@/sanity/lib/client";
import { Property, Reservation, Search } from "@/types";
import { revalidatePath } from "next/cache";

export async function getProperties(search: Search) {
  const { location, checkIn, checkOut, adults, children, rooms } =
    search;

  const properties = await client.fetch(`*[_type == "property"]`);

  const reservations = await client.fetch(`*[_type == "reservation"]`);

  // Filter properties based on user input and availability
  const filtered = properties.filter((property: Property) => {
    // Check if location matches
    const locationMatch =
      location === "" ||
      property.location.toLowerCase().includes(location?.toLowerCase());

    // Check if adults, children, and rooms are less than or equal to the property's occupancy
    const occupancyMatch =
      property.occupancy.adults >= Number(adults) &&
      property.occupancy.children >= Number(children) &&
      property.occupancy.rooms >= Number(rooms);

    // Check availability based on reservations
    const availabilityMatch = reservations.every((reservation: Reservation) => {
      // Check if the property is not reserved for the selected dates
      return (
        reservation.property._ref !== property._id ||
        new Date(reservation.checkOut) < new Date(checkIn) ||
        new Date(reservation.checkIn) > new Date(checkOut)
      );
    });

    return locationMatch && occupancyMatch && availabilityMatch;
  });

  const isFilter = Object.values(search).some((value) => value !== undefined);

  revalidatePath("/");
  return isFilter ? filtered : properties;
}

export async function getProperty(slug: string) {
  const property = await client.fetch(
    `*[_type == "property" && slug.current == $slug]`,
    { slug }
  );

  const reservations = await client.fetch(
    `*[_type == "reservation" && property._ref == $property[0]._id]`,
    { property }
  );

  revalidatePath(`/property/${slug}`);
  return { property: property[0], reservations: reservations };
}
