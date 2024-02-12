"use client";

import { useState } from "react";

import { regions } from "@/constants";

export default function CheckOut() {
  const [guest, setGuest] = useState({
    firstName: "",
    lastName: "",
    email: "",
    region: "Argentina",
    phone: "",
  });

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 flex-1">
      <input
        type="text"
        placeholder="First Name"
        value={guest.firstName}
        onChange={(e) => setGuest({ ...guest, firstName: e.target.value })}
        className="input"
      />

      <input
        type="text"
        placeholder="Last Name"
        value={guest.lastName}
        onChange={(e) => setGuest({ ...guest, lastName: e.target.value })}
        className="input"
      />

      <input
        type="email"
        placeholder="Email"
        value={guest.email}
        onChange={(e) => setGuest({ ...guest, email: e.target.value })}
        className="input"
      />

      <select
        value={guest.region}
        onChange={(e) => setGuest({ ...guest, region: e.target.value })}
        className="input"
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      <input
        type="tel"
        placeholder="Phone"
        value={guest.phone}
        onChange={(e) => setGuest({ ...guest, phone: e.target.value })}
        className="input"
      />

      <button type="submit" className="button">
        Check Out
      </button>
    </form>
  );
}
