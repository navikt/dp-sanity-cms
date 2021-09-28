import { FiExternalLink } from "react-icons/fi";
import { localeValueRequired } from "../../utils/validationHelpers";

export default {
  name: "menylenkeEkstern",
  title: "Menylenke til ekstern side",
  type: "object",
  icon: FiExternalLink,
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
      name: "beskrivelse",
      title: "Beskrivelse",
      type: "localeText",
    },
  ],
  preview: {
    select: {
      title: "tittel.no",
      subtitle: "url.no",
    },
  },
};
