import { FaChurch } from "react-icons/fa";

export const HistorikkIkon = FaChurch;

export default {
  type: "document",
  name: "historikkHjelpetekster",
  title: "Historikk",
  __experimental_actions: ["update", "publish"], // Har du laget et nytt datasett må du midlertidig fjerne denne for å kunne lage et nytt oppsett-dokument
  icon: HistorikkIkon,
  fields: [
    {
      type: "localeString",
      name: "title",
      title: "Tittel",
    },
    {
      type: "localeText",
      name: "kortInfo",
    },
    {
      type: "localeHistorikkRichText",
      name: "langInfo",
    },
    {
      type: "localeHistorikkRichText",
      name: "deltTekstForklaring",
    },
  ],
  preview: {
    select: {
      title: "title.no",
    },
  },
};
