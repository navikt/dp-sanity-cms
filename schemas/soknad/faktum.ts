import { descriptionTextField, helpTextField, questionTitleField, textIdField, unitField } from "./commonFields";

export const faktum = {
  type: "document",
  name: "faktum",
  title: "Spørsmål",
  fields: [
    textIdField,
    questionTitleField,
    descriptionTextField,
    helpTextField,
    unitField,
  ],
  preview: {
    select: {
      title: questionTitleField.name,
      subtitle: textIdField.name,
    },
  },
};
