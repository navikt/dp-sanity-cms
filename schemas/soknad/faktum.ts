import { descriptionTextField, helpTextField, questionTextField, textIdField, unitField } from "./commonFields";

export const faktum = {
  type: "document",
  name: "faktum",
  title: "Spørsmål",
  fields: [textIdField, questionTextField, descriptionTextField, helpTextField, unitField],
  preview: {
    select: {
      title: questionTextField.name,
      subtitle: textIdField.name,
    },
  },
};
