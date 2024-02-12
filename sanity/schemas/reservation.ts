export default {
  name: "reservation",
  type: "document",
  title: "Reservation",
  fields: [
    {
      name: "checkIn",
      type: "date",
      title: "Check-in Date",
    },
    {
      name: "checkOut",
      type: "date",
      title: "Check-out Date",
    },
    {
      name: "totalPrice",
      type: "number",
      title: "Total Price",
    },
    {
      name: "property",
      type: "reference",
      title: "Property",
      to: [{ type: "property" }],
    },
    {
      name: "guest",
      type: "object",
      title: "Guest",
      fields: [
        {
          name: "firstName",
          type: "string",
          title: "First Name",
        },
        {
          name: "lastName",
          type: "string",
          title: "Last Name",
        },
        {
          name: "email",
          type: "string",
          title: "Email",
        },
        {
          name: "region",
          type: "string",
          title: "Region",
        },
        {
          name: "phone",
          type: "string",
          title: "Phone",
        },
      ],
    },
  ],
};
