import SlugInput from "sanity-plugin-prefixed-slug";
import { MdWeb } from "react-icons/md";
import { innholdsseksjonRichText } from "./innholdsseksjonRichText";

export const innholdsseksjon = {
  name: "innholdsseksjon",
  type: "document",
  title: "Innholdsseksjon",
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
      name: "title",
      type: "string",
      title: "Tittel",
      validation: (Rule) => Rule.required().error("Tittel er påkrevd."),
    },
    {
      name: "slug",
      type: "slug",
      title: "Ankerlenke for innholdsseksjon",
      description:
        "Velg en god ankerlenke. Hvis den må endres i ettertid vil dette knekke lenker som går til denne siden.",
      validation: (Rule) => Rule.required().error("Ankerlenke er påkrevd med maks 96 tegn"),
      inputComponent: SlugInput,
      options: {
        source: "title",
        urlPrefix: "nav.no/dagpenger#",
        maxLength: 96,
      },
    },
    {
      name: "innhold",
      type: innholdsseksjonRichText.name,
      title: "Innhold",
    },
  ],
};
