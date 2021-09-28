import { FiLink } from "react-icons/fi";
import { localeValueRequired } from "../../utils/validationHelpers";
import VelgInfosider from "./VelgInfosider";

export default {
  name: "snarvei",
  title: "Snarvei",
  type: "object",
  icon: FiLink,
  fields: [
    {
      title: "Tittel",
      name: "tittel",
      type: "localeString",
      validation: localeValueRequired,
    },
    {
      title: "Url",
      name: "url",
      type: "localeUrl",
      validation: localeValueRequired,
    },
    {
      name: "visPaaForside",
      title: "Vis på nav.no/arbeid",
      type: "boolean",
    },
    {
      name: "visPaaSider",
      title: "Vis på side:",
      type: "array",
      of: [{ type: "string" }],
      inputComponent: VelgInfosider,
    },
  ],
  preview: {
    select: {
      title: "tittel.no",
      subtitle: "url.no",
    },
  },
};
