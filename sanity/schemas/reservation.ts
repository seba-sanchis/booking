export default {
  name: "reservation",
  type: "document",
  title: "Reservation",
  fields: [
    {
      name: "checkInDate",
      type: "date",
      title: "Check-in Date",
    },
    {
      name: "checkOutDate",
      type: "date",
      title: "Check-out Date",
    },
    {
      name: "guestName",
      type: "string",
      title: "Guest Name",
    },
    {
      name: "phone",
      type: "string",
      title: "Phone",
    },
    {
      name: "amountPaid",
      type: "number",
      title: "Amount Paid",
    },
    {
      name: "property",
      type: "reference",
      title: "Property",
      to: [{ type: "property" }],
    },
  ],
};
