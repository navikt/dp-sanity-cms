import { keyValuePair } from "./key-value-pair";
import { answer } from "./answer";

export const subFaktum = {
  type: "document",
  name: "subFaktum",
  title: "Underfaktum",
  fields: [
    {
      type: "string",
      name: "requiredAnswerId",
      title: "Påkrevd svar",
      readOnly: true,
    },
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
      of: [{ type: "reference", to: [{ type: answer.name }] }],
      type: "array",
    },
  ],
  preview: {
    select: {
      title: "title.value",
      subtitle: "title.key",
    },
  },
};
