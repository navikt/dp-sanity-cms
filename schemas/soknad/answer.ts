import { keyValuePair } from "./key-value-pair";

export const answer = {
  type: "object",
  name: "answer",
  title: "Svaralternativ",
  fields: [
    {
      type: keyValuePair.name,
      name: "text",
      title: "Tekst",
    },
    {
      type: keyValuePair.name,
      name: "alertText",
      title: "Varseltekst",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  preview: {
    select: {
      title: "text.value",
      subtitle: "text.key",
    },
  },
};
