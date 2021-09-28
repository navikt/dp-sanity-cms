import { MdWeb } from "react-icons/md";
import { localeValueRequired } from "../../utils/validationHelpers";

export default {
  name: "faktaSide",
  type: "document",
  title: "Infoside",
  icon: MdWeb,
  fieldsets: [
    {
      name: "oppsett",
      title: "Oppsett",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Tittel",
      fieldset: "oppsett",
      validation: localeValueRequired,
    },
    {
      name: "slug",
      type: "slug",
      title: "URL (slug)",
      fieldset: "oppsett",
      validation: (Rule) => Rule.required(),
      description: "Velg en god url. Hvis den må endres i ettertid vil dette knekke lenker som går til denne siden",
      options: {
        source: "title.no",
        maxLength: 96,
      },
    },
    {
      name: "visSprakversjon",
      type: "visSprakversjon",
      title: "Vis språkversjon",
      fieldset: "oppsett",
      validation: (Rule) =>
        Rule.custom((sprak) => sprak?.no || sprak?.en || "Siden må være tilgjengelig på minst et språk"),
    },
    {
      fieldset: "oppsett",
      name: "visIngenValgPasser",
      title: 'Tilpass innhold: Vis "ingen valg passer"',
      type: "boolean",
    },
    {
      fieldset: "oppsett",
      name: "nokkelordBeskrivelse",
      type: "localeString",
      title: "Nøkkelord",
      description: "Beskriv innholdet med noen få nøkkelord, til bruk på navigasjonsside",
    },
    {
      fieldset: "oppsett",
      name: "beskrivelse",
      type: "localeText",
      title: "Søkemotortekst",
      description:
        "Vises også øverst i kort fortalt. Kort beskrivelse av innholdet for ingress, søkemotorer og sosiale medier. Skriv en sammenhengende setning",
      validation: localeValueRequired,
    },
    {
      name: "kortFortalt",
      type: "localeKortFortaltRichText",
      title: "Kort fortalt",
    },
    {
      name: "innhold",
      type: "localeRichText",
      title: "Innhold",
      validation: localeValueRequired,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "beskrivelse",
      slug: "slug.current",
    },
    prepare: (selection) => ({
      title: selection.title?.no || selection.title?.en,
      subtitle: `/${selection.slug}/   ${selection.subtitle?.no || selection.subtitle?.en}`,
    }),
  },
};
