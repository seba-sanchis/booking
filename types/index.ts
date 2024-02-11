import type { Image } from "sanity";

export interface Property {
  _id: string;
  image: Image[];
  name: string;
  slug: { current: string };
  details: string;
  location: string;
  occupancy: { adults: number; children: number; rooms: number };
  price: number;
}

export interface Reservation {
  _id: string;
  checkInDate: Date;
  checkOutDate: Date;
  guestName: string;
  phone: string;
  amountPaid: number;
  property: {
    _ref: string;
    _type: string;
  };
}

export interface Search {
  location: string;
  checkInDate: string;
  checkOutDate: string;
  adults: string;
  children: string;
  rooms: string;
}
