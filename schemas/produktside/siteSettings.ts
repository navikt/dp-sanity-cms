import { produktsideRichText } from "./produktsideRichText";

export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  // eslint-disable-next-line camelcase
  __experimental_actions: ["update", "publish"], // Har du laget et nytt datasett må du midlertidig fjerne denne for å kunne lage et nytt oppsett-dokument
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
    },
    {
      name: "kortFortalt",
      type: "kortFortaltRichText",
      title: "Kort fortalt",
    },
    {
      name: "innhold",
      type: produktsideRichText.name,
      title: "Innhold",
    },
  ],
};
