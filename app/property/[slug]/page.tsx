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

      <div className="relative flex justify-between w-full max-w-screen-lg">
        <div className="flex flex-col gap-2 mr-4 flex-1">
          <div>
            <h1 className="text-3xl font-semibold text-[--primary-contrast]">
              {data.property.name}
            </h1>
            <h2 className="text-lg">{data.property.location}</h2>
          </div>

          <p>{data.property.details}</p>
        </div>

        <Reserve
          price={data.property.price}
          occupancy={data.property.occupancy}
          reservations={data.reservations}
        />
      </div>
    </section>
  );
}
