export const contentPage = {
  type: "document",
  name: "contentPage",
  title: "Innholdsside",
  fields: [
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      type: "string",
      name: "title",
      title: "Tittel på siden",
    },
    {
      type: "array",
      name: "content",
      title: "Innhold",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
