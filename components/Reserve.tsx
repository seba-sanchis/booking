"use client";

import { useState } from "react";
import { CheckOut, SearchPanel } from ".";
import { Reservation } from "@/types";

type Props = {
  id: string;
  details: string;
  location: string;
  name: string;
  occupancy: { adults: number; children: number; rooms: number };
  price: number;
  reservations: Reservation[];
};

export default function Reserve({
  id,
  details,
  location,
  name,
  occupancy,
  price,
  reservations,
}: Props) {
  const [toggleReserve, setToggleReserve] = useState(false);
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });
  const [nights, setNights] = useState(0);

  const totalPrice = price * nights;

  // Function to format currency amount
  function formatCurrency(amount: number) {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className="relative flex justify-between w-full max-w-screen-lg">
      <div
        className={`${
          toggleReserve ? "hidden" : "flex"
        } flex-col gap-2 mr-4 flex-1`}
      >
        <div>
          <h1 className="text-3xl font-semibold text-[--primary-contrast]">
            {name}
          </h1>
          <h2 className="text-lg">{location}</h2>
        </div>

        <p>{details}</p>
      </div>

      <div
        className={`${
          toggleReserve ? "p-4 w-full" : "p-2 w-64"
        } relative inset-0 flex flex-col rounded-lg bg-[--primary-contrast] mb-4`}
      >
        <div className={`${toggleReserve ? "hidden" : "flex flex-col gap-4"}`}>
          <div className="flex flex-col items-end">
            <div className="text-sm">
              Adults: <span className="text-base">{occupancy.adults}</span>
            </div>
            <div className="text-sm">
              Children: <span className="text-base">{occupancy.adults}</span>
            </div>
            <div className="text-sm">
              Rooms: <span className="text-base">{occupancy.adults}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xl">{formatCurrency(price)}</div>
            <div className="text-sm">price per night</div>
          </div>
          <button
            type="button"
            className="button"
            onClick={() => setToggleReserve(true)}
          >
            Reserve
          </button>
        </div>
        <div
          className={`${
            toggleReserve ? "flex justify-between gap-4" : "hidden"
          }`}
        >
          <SearchPanel
            date={date}
            nights={nights}
            reservations={reservations}
            setDate={setDate}
            setNights={setNights}
            totalPrice={totalPrice}
          />
          <CheckOut id={id} date={date} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
}
