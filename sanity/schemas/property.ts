export default {
  name: "property",
  type: "document",
  title: "Property",
  fields: [
    {
      name: "image",
      type: "array",
      title: "Image",
      of: [{ type: "image" }],
      options: { hotspot: true },
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name" },
    },
    {
      name: "details",
      type: "text",
      title: "Details",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
    },
    {
      name: "occupancy",
      type: "object",
      title: "Occupancy",
      fields: [
        {
          name: "adults",
          type: "number",
          title: "Adults",
        },
        {
          name: "children",
          type: "number",
          title: "Children",
        },
        {
          name: "rooms",
          type: "number",
          title: "Rooms",
        },
      ],
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
  ],
};

// {
//   name: "reservation",
//   type: "reference",
//   title: "Reservation",
//   to: [{ type: "reservation" }],
// },