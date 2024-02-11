import { getProperties } from "@/lib/actions";
import { PropertyCard } from ".";
import { Property, Search } from "@/types";

type Props = {
  searchParams: Search;
};

export default async function PropertyGrid({ searchParams }: Props) {
  const properties = await getProperties({
    location: searchParams.location,
    checkInDate: searchParams.checkInDate,
    checkOutDate: searchParams.checkOutDate,
    adults: searchParams.adults,
    children: searchParams.children,
    rooms: searchParams.rooms,
  });

  return (
    <section className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
      {properties.map((property: Property) => (
        <PropertyCard key={property.slug.current} property={property} />
      ))}
    </section>
  );
}
