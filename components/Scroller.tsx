"use client";

import { useState } from "react";
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";
import type { Image as Images } from "sanity";

type Props = {
  name: string;
  image: Images[];
};

export default function Scroller({ name, image }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-2 pt-4 w-full max-w-screen-lg">
      <div className="flex justify-center items-center overflow-hidden h-[640px] rounded-lg">
        <Image
          src={urlForImage(image[selected])}
          alt={`main photo of ${name}`}
          width={1024}
          height={640}
          className="object-cover h-full"
        />
      </div>
      <div className="grid grid-cols-9 gap-2">
        {image.map((photo, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="flex justify-center items-center overflow-hidden h-full max-h-16 rounded-lg"
          >
            <Image
              src={urlForImage(photo)}
              alt={`photo ${i + 1} of ${name}`}
              width={128}
              height={128}
              className="object-cover h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
