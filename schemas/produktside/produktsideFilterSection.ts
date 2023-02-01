import { MdFilter } from "react-icons/md";
import { produktsideSectionRichText } from "./produktsideSection/produktsideSectionRichText";

export const produktsideFilterSection = {
  name: "produktsideFilterSection",
  type: "document",
  title: "Produktside filter seksjon",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  // eslint-disable-next-line camelcase
  __experimental_actions: ["update", "publish"], // Har du laget et nytt datasett må du midlertidig fjerne denne for å kunne lage et nytt dokument
  icon: MdFilter,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
      validation: (Rule) => Rule.required().error("Tittel er påkrevd."),
    },
    {
      name: "content",
      title: "Innhold",
      type: produktsideSectionRichText.name,
    },
    {
      name: "filterLabel",
      title: "Label for filtermeny i filterseksjonen",
      type: "string",
      validation: (Rule) => Rule.required().error("Label for filtermeny er påkrevd."),
    },
  ],
};
