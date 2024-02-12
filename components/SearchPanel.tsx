"use client";

import { Reservation } from "@/types";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

type Props = {
  date: { startDate: string; endDate: string };
  nights: number;
  reservations: Reservation[];
  setDate: React.Dispatch<
    React.SetStateAction<{ startDate: string; endDate: string }>
  >;
  setNights: React.Dispatch<React.SetStateAction<number>>;
  totalPrice: number;
};

export default function SearchPanel({
  date,
  nights,
  reservations,
  setDate,
  setNights,
  totalPrice,
}: Props) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // Function to format the date
  function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    };
    return date.toLocaleDateString(undefined, options);
  }

  // Function to format currency amount
  function formatCurrency(amount: number) {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  function handleDisabled() {
    const disabledDate = reservations.map((reservation) => ({
      startDate: reservation.checkIn,
      endDate: reservation.checkOut,
    }));

    return disabledDate;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const startDate = new Date(date.startDate);
    const endDate = new Date(date.endDate);

    // Formatted start date
    const formattedStartDate = formatDate(startDate);

    // Formatted end date
    const formattedEndDate = formatDate(endDate);

    // Calculate the difference in milliseconds
    const differenceMs = endDate.getTime() - startDate.getTime();

    // Convert the difference to days
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

    setCheckIn(formattedStartDate);
    setCheckOut(formattedEndDate);

    // Update the state with the number of nights
    setNights(differenceDays);
  }

  return (
    <div className="flex flex-col gap-4 flex-1">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Datepicker
          value={date}
          onChange={(newDate) => {
            if (newDate && newDate.startDate && newDate.endDate) {
              setDate({
                startDate: newDate.startDate?.toString(),
                endDate: newDate.endDate?.toString(),
              });
            }
          }}
          disabledDates={handleDisabled()}
          separator={"-"}
          displayFormat={"ddd DD MMM"}
          inputClassName="input w-full"
          containerClassName="min-w-72 w-full"
          toggleClassName="hidden"
        />

        <button className="button h-fit">Search</button>
      </form>
      <div className={checkIn && checkOut ? "flex flex-col gap-4" : "hidden"}>
        <div className="flex flex-col gap-4">
          <div className="text-lg font-semibold">Your booking details</div>
          <div className="flex justify-center gap-4">
            <div>
              <div>Check-in</div>
              <div className="pr-4 border-r border-[--foreground]">
                <div className="text-lg font-semibold">{checkIn}</div>
                <div className="text-sm">2:00 PM - 12:00 AM</div>
              </div>
            </div>
            <div>
              <div>Check-out</div>
              <div>
                <div className="text-lg font-semibold">{checkOut}</div>
                <div className="text-sm">10:00 AM - 11:00 AM</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>Total length of stay</div>
            <div className="font-semibold">
              {nights} {nights === 1 ? "night" : nights > 1 ? "nights" : ""}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-lg font-semibold">Your price summary</div>
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Price</span>
            <span className="text-lg font-semibold">
              {formatCurrency(totalPrice)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
