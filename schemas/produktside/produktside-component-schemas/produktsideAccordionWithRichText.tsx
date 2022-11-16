export const produktsideAccordionWithRichText = {
  name: "produktsideAccordionWithRichText",
  title: "AccordionNY",
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
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `(Accordion NY) ${title}`,
      };
    },
  },
};
