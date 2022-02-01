import { answerOption } from "./answerOption";
import { basefaktum } from "./baseFaktum";
import { generatorFaktum } from "./generatorFaktum";
import { valgFaktum } from "./valgfaktum";

export const keyField = {
  type: "string",
  name: "key",
  title: "Nøkkel",
  readOnly: true,
  hidden: true,
};

export const sectionTitleField = {
  type: "text",
  name: "title",
  title: "Tittel",
  rows: 3,
};

export const questionTitleField = {
  type: "text",
  name: "title",
  title: "Spørsmål",
  rows: 3,
};

export const answerTitleField = {
  type: "text",
  name: "title",
  title: "Svar",
  rows: 3,
};

export const baseFaktumTypeField = {
  type: "string",
  name: "type",
  title: "Type",
  options: {
    list: ["int", "double", "tekst", "localdate", "periode"],
  },
};

export const valgFaktumTypeField = {
  type: "string",
  name: "type",
  title: "Type",
  options: {
    list: ["boolean", "valg", "dropdown", "flervalg"],
  },
};

export const generatorFaktumTypeField = {
  type: "string",
  name: "type",
  title: "Type",
  options: {
    list: ["generator"],
    layout: "dropdown",
  },
  initialValue: {
    type: "generator",
  },
};

export const generatorFaktumListTypeField = {
  type: "string",
  name: "listType",
  title: "Listetype",
  options: {
    list: ["Arbeidsforhold", "Barn", "Standard"],
  },
};

export const unitField = {
  type: "string",
  name: "unit",
  title: "Enhet for inputfelt",
};

export const descriptionTextField = {
  type: "array",
  name: "description",
  title: "Beskrivelse",
  of: [
    {
      type: "block",
    },
  ],
};

export const helpTextField = {
  type: "text",
  name: "helpText",
  title: "Hjelpetekst",
  rows: 3,
};

export const alertTextField = {
  type: "text",
  name: "alertText",
  title: "Varseltekst",
  rows: 3,
};

export const requiredAnswerOptionsArray = {
  title: "Required answer ids",
  name: "requiredAnswerIds",
  type: "array",
  of: [{ type: "reference", to: [{ type: "answerOption" }] }],
};

export const answerOptionsArray = {
  title: "Svaralternativ",
  name: "answerOptions",
  type: "array",
  of: [{ type: "reference", to: [{ type: "answerOption" }] }],
};

export const subFaktumArray = {
  title: "SubFaktum",
  name: "subFaktum",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "baseFaktum" }, { type: "valgFaktum" }, { type: "generatorFaktum" }],
    },
  ],
};

export const faktumArray = {
  title: "Faktum",
  name: "faktum",
  type: "array",
  of: [{ type: "reference", to: [{ type: "baseFaktum" }, { type: "valgFaktum" }, { type: "generatorFaktum" }] }],
};
