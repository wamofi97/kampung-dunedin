import { defineField, defineType } from "sanity";

export default defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      description: "The author of the review",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      description: "The review text (max 500 characters)",
      validation: (Rule) =>
        Rule.required()
          .max(500)
          .warning("Review should not exceed 500 characters"),
    }),
    defineField({
      name: "shortText",
      title: "Shortened Review",
      type: "text",
      rows: 4,
      description:
        "A short simplified version of the review (max 200 characters)",
      validation: (Rule) =>
        Rule.max(200).warning("Short review should not exceed 200 characters"),
    }),
  ],
});
