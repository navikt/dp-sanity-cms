import { MdWeb } from "react-icons/md";

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
    },
    {
      name: "innhold",
      type: "richText",
      title: "Innhold",
    },
  ],
};
