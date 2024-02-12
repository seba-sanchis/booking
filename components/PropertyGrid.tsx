import { getProperties } from "@/lib/actions";
import { PropertyCard } from ".";
import { Property, Search } from "@/types";

type Props = {
  searchParams: Search;
};

export default async function PropertyGrid({ searchParams }: Props) {
  const properties = await getProperties({
    location: searchParams.location,
    checkIn: searchParams.checkIn,
    checkOut: searchParams.checkOut,
    adults: searchParams.adults,
    children: searchParams.children,
    rooms: searchParams.rooms,
  });

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-lg text-[--primary-contrast]">Explore Argentina</h2>
        <p>These popular destinations have a lot to offer</p>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {properties.map((property: Property) => (
          <PropertyCard key={property.slug.current} property={property} />
        ))}
      </div>
    </section>
  );
}
