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
  checkIn: Date;
  checkOut: Date;
  guest: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    totalPrice: number;
  },
  property: {
    _ref: string;
    _type: string;
  };
}

export interface Search {
  location: string;
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
  rooms: string;
}
