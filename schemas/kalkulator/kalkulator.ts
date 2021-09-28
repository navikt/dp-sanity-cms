import { FaCalculator } from "react-icons/fa";

export const DagpengeKalkulatorIkon = FaCalculator;

export default {
  type: "document",
  name: "dagpengekalkulator",
  title: "Kalkulator - Dagpenger",
  __experimental_actions: ["update", "publish"], // Har du laget et nytt datasett må du midlertidig fjerne denne for å kunne lage et nytt oppsett-dokument
  icon: DagpengeKalkulatorIkon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
    },
    {
      name: "samtykke",
      type: "kalkulatortext",
    },
    {
      name: "fortsettknapp",
      title: "Fortsett - Knapp",
      type: "string",
    },
    {
      name: "loadingmessage",
      type: "string",
      title: "Ventebeskjed - laster inntekter fra skatteetaten",
    },
    {
      name: "tilbake",
      title: "Tilbake til dagpenger - lenketekst",
      type: "string",
    },
    {
      name: "positiveresponse",
      type: "kalkulatortext",
    },
    {
      name: "negativeresponse",
      type: "kalkulatortext",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: DagpengeKalkulatorIkon,
      };
    },
  },
};
