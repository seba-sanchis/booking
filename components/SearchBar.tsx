"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Datepicker from "react-tailwindcss-datepicker";

export default function SearchBar() {
  const router = useRouter();

  const today = new Date();

  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is 0-indexed, so add 1
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  }

  const [location, setLocation] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [toggleOccupancy, setToggleOccupancy] = useState(false);
  const [date, setDate] = useState({
    startDate: formatDate(today),
    endDate: formatDate(tomorrow),
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const searchParams = new URLSearchParams(window.location.search);

    if (location || location === "") {
      searchParams.set("location", location);
    } else {
      searchParams.delete("location");
    }

    if (date.startDate) {
      searchParams.set("checkInDate", date.startDate);
    } else {
      searchParams.delete("checkInDate");
    }

    if (date.endDate) {
      searchParams.set("checkOutDate", date.endDate);
    } else {
      searchParams.delete("checkOutDate");
    }

    if (adults) {
      searchParams.set("adults", adults.toString());
    } else {
      searchParams.delete("adults");
    }

    if (children || children === 0) {
      searchParams.set("children", children.toString());
    } else {
      searchParams.delete("children");
    }

    if (rooms) {
      searchParams.set("rooms", rooms.toString());
    } else {
      searchParams.delete("rooms");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative bottom-8 flex gap-1 rounded-lg p-1 w-full max-w-screen-lg bg-[--primary-contrast]"
      >
        <div>
          <input
            type="text"
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input"
          />
        </div>

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
          separator={"-"}
          displayFormat={"ddd DD MMM"}
          inputClassName="input"
          containerClassName="min-w-72"
          toggleClassName="hidden"
        />

        <div className="relative">
          <button
            type="button"
            onClick={() => setToggleOccupancy((state) => !state)}
            className="input"
          >
            {adults} {adults > 1 ? "adults" : "adult"} · {children} children ·{" "}
            {rooms} {rooms > 1 ? "rooms" : "room"}
          </button>

          <div
            className={`absolute p-4 w-full overflow-hidden border border-[--primary-contrast] rounded-lg bg-[--background] z-10 ${
              toggleOccupancy ? "flex flex-col gap-4" : "hidden"
            }`}
          >
            <div className="flex items-center gap-2">
              Adults:
              <input
                type="number"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="bg-[--background] p-2 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              Children:
              <input
                type="number"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="bg-[--background] p-2 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              Rooms:
              <input
                type="number"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="bg-[--background] p-2 outline-none"
              />
            </div>
          </div>
        </div>

        <button className="button">Search</button>
      </form>
      <div
        className={`absolute inset-0 ${toggleOccupancy ? "flex" : "hidden"}`}
        onClick={() => setToggleOccupancy(false)}
      ></div>
    </>
  );
}
