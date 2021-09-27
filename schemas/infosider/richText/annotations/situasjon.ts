import { GiKrakenTentacle } from "react-icons/gi";

export default {
  type: "document",
  name: "situasjon",
  title: "Situasjon",
  icon: GiKrakenTentacle,
  fields: [
    {
      type: "localeString",
      name: "name",
      title: "Label",
    },
  ],
  preview: {
    select: {
      title: "name.no",
      media: "icon",
    },
  },
};
