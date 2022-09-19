import { produktsideRichText } from "./produktsideRichText";

export const produktsideSettings = {
  name: "produktsideSettings",
  title: "Oppsett for Produktside Dagpenger",
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
      name: "content",
      type: produktsideRichText.name,
      title: "Innhold",
    },
    {
      name: "supportLinks",
      type: "array",
      title: "Nyttig å vite",
      description:
        "Lenker til andre sider med støtteinformasjon, for eksempel inngang til lovtekst om produktet eller sentral klageinformasjon. Lenkemenyen kan brukes til å lenke til denne typen tilleggsinformasjon som ikke er dekket på produktsiden.",
      of: [
        {
          title: "Lenkemeny",
          type: "object",
          fields: [
            { title: "Tittel", name: "title", type: "string", validation: (Rule) => Rule.required() },
            {
              title: "URL",
              name: "url",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Åpne i ny fane",
              name: "targetBlank",
              type: "boolean",
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
};
