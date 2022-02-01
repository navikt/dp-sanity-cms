import {
  descriptionTextField,
  faktumArray,
  helpTextField,
  keyField,
  questionTitleField,
  sectionTitleField,
} from "./commonFields";

export const seksjon = {
  type: "document",
  name: "seksjon",
  title: "Seksjon",
  fields: [keyField, sectionTitleField, descriptionTextField, helpTextField, faktumArray],
  preview: {
    select: {
      title: questionTitleField.name,
      subtitle: keyField.name,
    },
  },
};
