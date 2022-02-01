import { alertTextField, answerTitleField, helpTextField, keyField, questionTitleField } from "./commonFields";

export const answerOption = {
  type: "document",
  name: "answerOption",
  title: "Svaralternativ",
  fields: [keyField, answerTitleField, helpTextField, alertTextField],
  preview: {
    select: {
      title: questionTitleField.name,
      subtitle: keyField.name,
    },
  },
};
