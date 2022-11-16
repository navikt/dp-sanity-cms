export const produktsideReadMoreWithRichText = {
  name: "produktsideReadMoreWithRichText",
  title: "ReadMore NY",
  type: "object",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().error("Tittel er påkrevd."),
    },
    {
      title: "Innhold",
      name: "content",
      type: "produktsideComponentRichText",
      validation: (Rule) => Rule.required().error("Innhold er påkrevd."),
    },
    {
      title: "Størrelse",
      name: "size",
      type: "string",
      initialValue: "medium",
      options: {
        list: [
          { title: "small", value: "small" },
          { title: "medium", value: "medium" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `(ReadMore NY) ${title}`,
      };
    },
  },
};
