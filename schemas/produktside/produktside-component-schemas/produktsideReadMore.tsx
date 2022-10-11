export const produktsideReadMore = {
  name: "produktsideReadMore",
  title: "ReadMore",
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
      type: "text",
      validation: (Rule) => Rule.required().error("Innhold er påkrevd."),
    },
    {
      title: "Størrelse",
      name: "size",
      type: "string",
      initialValue: "medium",
      options: {
        list: [
          { title: "Små", value: "small" },
          { title: "Medium", value: "medium" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "content",
    },
    prepare({ title, subtitle }) {
      return {
        title: `(ReadMore) ${title}`,
        subtitle,
      };
    },
  },
};
