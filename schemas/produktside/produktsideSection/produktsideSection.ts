import { MdWeb } from "react-icons/md";
import { produktsideSectionRichText } from "./produktsideSectionRichText";

export const produktsideSection = {
  name: "produktsideSection",
  type: "document",
  title: "Innholdsseksjoner",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  // eslint-disable-next-line camelcase
  //__experimental_actions: ["update", "publish"], // Har du laget et nytt datasett må du midlertidig fjerne denne for å kunne lage et nytt oppsett-dokument
  icon: MdWeb,
  fields: [
    {
      type: "navIconPicker",
      name: "iconName",
      title: "Ikon",
    },
    {
      name: "title",
      type: "string",
      title: "Tittel",
      validation: (Rule) => Rule.required().error("Tittel er påkrevd."),
    },
    {
      name: "slug",
      type: "slug",
      title: "Ankerlenke for innholdsseksjonen",
      description:
        "Velg en god ankerlenke. Hvis den må endres i ettertid vil dette knekke lenker som går til denne siden.",
      validation: (Rule) => Rule.required().error("Ankerlenke er påkrevd med maks 96 tegn"),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Innhold",
      name: "content",
      type: produktsideSectionRichText.name,
    },
  ],
};
