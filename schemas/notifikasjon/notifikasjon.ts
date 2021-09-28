import { FiAlertCircle } from "react-icons/fi";
import getPreviewTextFromBlockContent from "../utils/getPreviewTextFromBlockContent";
import VelgInfosider from "../infosider/oppsett/VelgInfosider";

export default {
  type: "document",
  name: "notifikasjon",
  title: "Blå informasjonsboks",
  icon: FiAlertCircle,
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "localeString",
    },
    {
      name: "innhold",
      type: "localeNotifikasjonRichText",
    },
    {
      name: "visPaaForside",
      title: "Vis på nav.no/arbeid",
      type: "boolean",
    },
    {
      name: "visPaaKalkulator",
      title: "Vis på dagpengekalkulatoren",
      type: "boolean",
    },
    {
      name: "visPaaInnsyn",
      title: "Vis på innsynsløsninga på dine-dagpenger",
      type: "boolean",
    },
    {
      name: "visPaaFaktaSider",
      title: "Vis på Infoside",
      type: "array",
      of: [{ type: "string" }],
      inputComponent: VelgInfosider,
    },
  ],
  preview: {
    select: {
      title: "title",
      innhold: "innhold",
    },
    prepare(selection) {
      let title = selection.title;
      let innhold = selection.innhold;
      return {
        title: title.no || title.en,
        subtitle: getPreviewTextFromBlockContent(innhold.no || innhold.en),
      };
    },
  },
};
