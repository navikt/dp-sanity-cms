import { timeline } from "./timeline";
import { AlertText } from "../../components/alert-text/AlertText";
import { ReadMore } from "../../components/read-more/ReadMore";
import { MdOutlineWarning, MdKeyboardArrowDown } from "react-icons/md/";

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

export const readMoreField = {
  type: "object",
  name: "readMoreSection",
  title: "Les mer seksjon",
  icon: MdKeyboardArrowDown,
  fields: [
    { type: "string", name: "title", title: "Tittel" },
    {
      type: "string",
      name: "size",
      title: "Størrelse",
      options: {
        list: [
          { value: "medium", title: "Medium" },
          { value: "small", title: "Small" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      type: "boolean",
      name: "defaultOpen",
      title: "Default åpnet",
    },
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
      size: "size",
      body: "body",
      defaultOpen: "defaultOpen",
    },
    prepare: ({ title, size, body, defaultOpen }: never) => {
      return {
        title,
        body,
        size,
        defaultOpen,
      };
    },
    component: ReadMore,
  },
};
