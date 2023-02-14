import { MdContactSupport } from "react-icons/md";
import { produktsideSectionRichText } from "./produktsideSection/produktsideSectionRichText";

export const produktsideContactOptions = {
  name: "produktsideContactOptions",
  type: "document",
  title: "Produktside kontaktalternativer",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  // eslint-disable-next-line camelcase
  __experimental_actions: ["update", "publish"], // Har du laget et nytt datasett må du midlertidig fjerne denne for å kunne lage et nytt dokument
  icon: MdContactSupport,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Hovedtittel",
      validation: (Rule) => Rule.required().error("Tittel er påkrevd."),
    },

    {
      name: "chatTitle",
      type: "string",
      title: "Chat: Tittel",
      validation: (Rule) => Rule.required().error("Tittel er påkrevd."),
    },
    {
      name: "chatContent",
      type: produktsideSectionRichText.name,
      title: "Chat: Innhold",
    },
    {
      name: "writeTitle",
      type: "string",
      title: "Skriv: Tittel",
      validation: (Rule) => Rule.required().error("Tittel er påkrevd."),
    },
    {
      name: "writeURL",
      type: "url",
      title: "Skriv: URL",
      validation: (Rule) => Rule.required().error("URL er påkrevd."),
    },
    {
      name: "writeContent",
      title: "Skriv: Innhold",
      type: produktsideSectionRichText.name,
    },
    {
      name: "callTitle",
      type: "string",
      title: "Telefon: Tittel",
      validation: (Rule) => Rule.required().error("Tittel er påkrevd."),
    },
    {
      name: "callURL",
      type: "url",
      title: "Telefon: URL",
      description: "Formatet på telefon er slik: tel:+01-562-867-5309",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["tel"],
        }),
    },
    {
      name: "callContent",
      type: produktsideSectionRichText.name,
      title: "Telefon: Innhold",
    },
  ],
};
