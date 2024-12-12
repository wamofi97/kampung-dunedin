import { defineField, defineType } from "sanity";

export default defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "dish",
      title: "Dish Selection",
      type: "reference",
      description: "Select a dish from the menu images",
      to: [{ type: "menuImages" }],
      validation: (Rule) => Rule.required().warning("Dish image is required"),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Enter the price of the dish (optional for future use)",
      validation: (Rule) =>
        Rule.min(0).warning("Price must be a positive number"),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Enter the description of the dish",
      type: "array",
      of: [{ type: "text", rows: 6 }],
      validation: (Rule) => Rule.required().warning("Description is required"),
    }),
  ],
  preview: {
    select: {
      title: "dish.name",
      media: "dish.image.asset",
    },
  },
});
