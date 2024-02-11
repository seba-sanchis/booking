"use client";

import { useState } from "react";
import { client } from "@/sanity/lib/client";

type Props = {
  propertyId: string;
};

export default function CheckOut({ propertyId }: Props) {
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // await client.create({
    //   _type: "reservation",
    //   checkInDate,
    //   checkOutDate,
    //   guestName,
    //   phone,
    //   amountPaid,
    //   property: {
    //     _type: "reference",
    //     _ref: propertyId,
    //   },
    // });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Guest Name:</label>
        <input
          id="name"
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="appearance-none bg-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="appearance-none bg-transparent"
        />
      </div>

      <button type="submit" className="bg-rose-500 rounded-full">
        Reserve
      </button>
    </form>
  );
}
