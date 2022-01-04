import { keyValuePair } from "./key-value-pair";
import { answer } from "./answer";
import { subFaktum } from "./sub-faktum";

export const faktum = {
  type: "document",
  name: "faktum",
  title: "Spørsmål",
  fields: [
    {
      type: keyValuePair.name,
      name: "title",
      title: "Tittel",
    },
    {
      type: "string",
      name: "type",
      title: "Type",
      hidden: true,
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
      type: keyValuePair.name,
      name: "alertText",
      title: "Varseltekst",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: "Svaralternativ",
      name: "answers",
      description: "",
      type: "array",
      of: [{ type: "reference", to: [{ type: answer.name }] }],
    },
    {
      title: "Underfaktum",
      name: "subFaktum",
      description: "",
      type: "array",
      of: [{ type: "reference", to: [{ type: subFaktum.name }] }],
    },
  ],
  preview: {
    select: {
      title: "title.value",
      subtitle: "title.key",
    },
  },
};
