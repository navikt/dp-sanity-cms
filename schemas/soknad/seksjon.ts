import { keyValuePair } from "./key-value-pair";
import { faktum } from "./faktum";
import { answer } from "./answer";

export const seksjon = {
  type: "document",
  name: "seksjon",
  title: "Seksjon",
  fields: [
    {
      type: keyValuePair.name,
      name: "title",
      title: "Tittel",
    },
    {
      type: keyValuePair.name,
      name: "description",
      title: "Beskrivelse",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      type: keyValuePair.name,
      name: "helpText",
      title: "Hjelpetekst",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: "Faktum",
      name: "faktum",
      description: "",
      type: "array",
      of: [{ type: "reference", to: [{ type: faktum.name }] }],
    },
    {
      title: "Svaralternativ",
      name: "answers",
      description: "",
      type: "array",
      of: [{ type: "reference", to: [{ type: answer.name }] }],
    },
  ],
  preview: {
    select: {
      title: "title.value",
      subtitle: "title.key",
    },
  },
};
