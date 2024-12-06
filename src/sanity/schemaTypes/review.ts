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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .max(500)
          .warning("Review should not exceed 500 characters"),
    }),
  ],
});
