import { getProperty } from "@/lib/actions";
import { Property, Reservation } from "@/types";
import { Reserve, Scroller } from "@/components";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const data: { property: Property; reservations: Reservation[] } =
    await getProperty(params.slug);

  return (
    <section className="flex flex-col items-center gap-4">
      <Scroller name={data.property.name} image={data.property.image} />

      <Reserve
        id={data.property._id}
        details={data.property.details}
        location={data.property.location}
        name={data.property.name}
        occupancy={data.property.occupancy}
        price={data.property.price}
        reservations={data.reservations}
      />
    </section>
  );
}
