export const textIdField = {
  type: "string",
  name: "textId",
  title: "Tekstnøkkel",
  readOnly: false, // Skal være true senere
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
  type: "object",
  name: "helpText",
  title: "Hjelpetekst",
  fields: [
    { type: "string", name: "title", title: "Tittel" },
    {
      type: "array",
      name: "body",
      title: "Brødtekst",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};

export const alertTextField = {
  type: "object",
  name: "alertText",
  title: "Varseltekst",
  fields: [
    {
      type: "string",
      name: "type",
      title: "Type",
      options: {
        list: [
          "info",
          { value: "warning", title: "Varsel" },
          { value: "error", title: "Feil" },
          { value: "success", title: "Vellykket" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    { type: "string", name: "title", title: "Tittel" },
    {
      type: "array",
      name: "body",
      title: "Brødtekst",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};