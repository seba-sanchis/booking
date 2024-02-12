"use client";

import { useState } from "react";
import { CheckOut, SearchPanel } from ".";
import { Reservation } from "@/types";

type Props = {
  id: string;
  price: number;
  occupancy: { adults: number; children: number; rooms: number };
  reservations: Reservation[];
};

export default function Reserve({ id, price, occupancy, reservations }: Props) {
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
    <div
      className={`${
        toggleReserve ? "absolute top-0 right-0 left-0 p-4" : "w-64 p-2"
      } flex flex-col rounded-lg bg-[--primary-contrast]`}
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
        className={`${toggleReserve ? "flex justify-between gap-4" : "hidden"}`}
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
  );
}
