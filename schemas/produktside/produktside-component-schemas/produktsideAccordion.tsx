export const produktsideAccordion = {
  name: "produktsideAccordion",
  title: "Accordion",
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
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "content",
    },
    prepare({ title, subtitle }) {
      return {
        title: `(Accordion) ${title}`,
        subtitle,
      };
    },
  },
};
