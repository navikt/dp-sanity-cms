import { timeline } from "./timeline";
import { AlertText } from "../../components/alert-text/AlertText";
import { MdOutlineWarning } from "react-icons/all";

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

export const questionTextField = {
  type: "text",
  name: "text",
  title: "Spørsmål",
  rows: 3,
};

export const answerTextField = {
  type: "text",
  name: "text",
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
    { type: timeline.name },
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

const alertTextVariants = [
  { value: "info", title: "Info" },
  { value: "warning", title: "Varsel" },
  { value: "error", title: "Feil" },
  { value: "success", title: "Vellykket" },
];

export const alertTextField = {
  type: "object",
  name: "alertText",
  title: "Varseltekst",
  icon: MdOutlineWarning,
  fields: [
    {
      type: "string",
      name: "type",
      title: "Type",
      options: {
        list: alertTextVariants,
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
  preview: {
    select: {
      title: "title",
      type: "type",
      body: "body",
    },
    prepare: ({ title, type, body }: never) => {
      return {
        title,
        body,
        type,
      };
    },
    component: AlertText,
  },
};

export const valueTextField = {
  type: "string",
  name: "valueText",
  title: "Verdi",
};
