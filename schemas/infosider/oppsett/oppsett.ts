import { localeValueRequired } from "../../utils/validationHelpers";

export default {
  name: "oppsett",
  title: "Oppsett",
  type: "document",
  __experimental_actions: ["update", "publish"], // Har du laget et nytt datasett må du midlertidig fjerne denne for å kunne lage et nytt oppsett-dokument
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Tittel",
      description: "Hovedtittel på forsiden nav.no/arbeid",
      validation: localeValueRequired,
    },
    {
      name: "beskrivelse",
      type: "localeText",
      title: "Beskrivelse",
      description: "Kort beskrivelse av innholdet på landingssiden for ingress, søkemotorer og sosiale medier",
      validation: localeValueRequired,
    },
    {
      name: "kortFortalt",
      type: "localeOppsettRichText",
      title: "Kort fortalt",
    },
    {
      name: "menyLenker",
      title: "Lenker meny",
      type: "array",
      description:
        "Brukes for å bestemme innhold og rekkefølge på lenker i menyen på forside og på faktasider. Interne sider som ikke blir eksplisitt lagt til her vil automatisk dukke opp sist i menyen",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "faktaSide",
            },
          ],
        },
        {
          type: "menylenkeEkstern",
        },
      ],
    },
    {
      name: "snarveier",
      title: "Snarveier",
      type: "array",
      of: [
        {
          type: "snarvei",
        },
      ],
    },
    {
      name: "folketrygdensGrunnbellop",
      type: "number",
      validation: (Rule) => [
        Rule.required().min(99800).error("Dette tallet ser for lite ut"),
        Rule.max(250000).error("Dette tallet ser for stort ut"),
      ],
      description: "Brukes for å konvertere G til kroner i frontenden",
    },
    {
      name: "seoImage",
      title: "Previewbilde",
      description: "Dette bildet brukes for preveiw av lenker i feks sosiale medier",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    prepare: (selection) => ({
      title: "Oppsett",
    }),
  },
};
