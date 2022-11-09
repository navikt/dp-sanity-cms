export const produktsideFilters = [
  { title: "Arbeidsledig", value: "arbeidsledig" },
  { title: "Permittert", value: "permittert" },
];

export const produktsideFilteredContent = {
  name: "produktsideFilteredContent",
  title: "FilteredContent",
  type: "object",
  fields: [
    {
      title: "Filtreringskategorier",
      name: "filters",
      validation: (Rule) => Rule.required().error("Filtreringskategori er påkrevd."),
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: produktsideFilters,
      },
    },
    {
      title: "Filtrert innhold",
      name: "content",
      type: "produktsideSectionRichText",
      validation: (Rule) => Rule.required().error("Innhold er påkrevd."),
    },
  ],
  preview: {
    select: {
      title: "filters",
    },
    prepare({ title }) {
      return {
        title: `(FilteredContent) ${title}`,
      };
    },
  },
};
