import { defineField, defineType } from "sanity";

export default defineType({
  name: "menuImages",
  title: "Menu Images",
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
      title: "Dish Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().warning("Dish image is required"),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      description: "Alt text is required for accessibility",
      type: "slug",
      options: {
        source: "name",
        slugify: (input) => input.toLowerCase().slice(0, 200),
      },
    }),
  ],
});
