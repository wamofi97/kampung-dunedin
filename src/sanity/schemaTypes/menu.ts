import { defineField, defineType } from "sanity";

export default defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Dish Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .max(50)
          .warning("Dish name should not exceed 50 characters"),
    }),
    defineField({
      name: "image",
      title: "Menu Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().warning("Dish image is required"),
    }),
    defineField({
      name: "alternateText",
      title: "Alternate Text",
      type: "string",
      validation: (Rule) =>
        Rule.max(100).warning(
          "Alternate text should not exceed 100 characters",
        ),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) =>
        Rule.min(0).warning("Price must be a positive number"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required().warning("Description is required"),
    }),
  ],
});
