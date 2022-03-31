import { answerOption } from "./answerOption";
import { basefaktum } from "./baseFaktum";
import { generatorFaktum } from "./generatorFaktum";
import { valgFaktum } from "./valgfaktum";

export const periodeType = {
  title: "dato (fra-til)",
  value: "periode"
}
export const booleanType = {
  value: "boolean",
  title: "Ja/Nei Spørsmål",
}
export const intType = {
  value: "int",
  title: "Heltall",
}
export const doubleType = {
  title: "Desimaltall",
  value: "double"
}
export const tekstType = {
  value: "tekst",
  title: "Fritekst",
}
export const localdateType = {
  title: "Dato",
  value: "localdate"
}
export const valgType = {
  value: "valg",
  title: "Radioknapper",
}
export const dropdownType = {
  value: "dropdown",
  title: "Nedtrekksliste",
}
export const flervalgType = {
  value: "flervalg",
  title: "Avkryssingsboks (flervalg)",
}

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
  title: "Seksjonstittel",
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
    list: [intType, doubleType, tekstType, localdateType, periodeType],
  },
};

export const valgFaktumTypeField = {
  type: "string",
  name: "type",
  title: "Type",
  options: {
    list: [booleanType, valgType, dropdownType, flervalgType],
  },
};

export const generatorFaktumTypeField = {
  type: "string",
  name: "type",
  title: "Spørsmålstype",
  options: {
    list: [{value: "generator", title: "Spørsmålsbolk"}],
    layout: "dropdown",
  },
  initialValue: {
    type: "generator",
  },
};

export const generatorFaktumListTypeField = {
  type: "string",
  name: "listType",
  title: "Spørsmålsbolk",
  options: {
    list: ["Arbeidsforhold", "Barn", "Standard"],
  },
};

export const unitField = {
  type: "string",
  name: "unit",
  title: "Enhet for inputfelt (f.eks timer, dager)",
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
  title: "Påkrevd svar på tidligere spørsmål",
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
  title: "Oppfølgingsspørsmål",
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
  title: "Spørsmål",
  name: "faktum",
  type: "array",
  of: [{ type: "reference", to: [{ type: "baseFaktum" }, { type: "valgFaktum" }, { type: "generatorFaktum" }] }],
};
