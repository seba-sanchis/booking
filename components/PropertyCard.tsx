import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";
import { Property } from "@/types";
import Link from "next/link";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  // Function to format currency amount
  function formatCurrency(amount: number) {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <Link
      href={`/property/${property.slug.current}`}
      className="flex flex-col rounded-lg border border-[--secondary-contrast] hover:border-[--primary-contrast]"
    >
      <div className="overflow-hidden h-full max-h-40">
        <Image
          src={urlForImage(property.image[0])}
          alt="photo"
          width={256}
          height={256}
          className="rounded-lg object-cover h-full"
        />
      </div>

      <div className="flex flex-col p-4">
        <div className="text-[--primary-contrast] font-semibold">
          {property.name}
        </div>
        <div className="font-semibold">{property.location}</div>
        <div className="text-sm self-end">
          Starting from:{" "}
          <span className="text-base font-semibold">
            {formatCurrency(property.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
