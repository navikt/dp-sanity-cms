import { alertTextField, answerTitleField, questionTitleField, textIdField } from "./commonFields";

export const svaralternativ = {
  type: "document",
  name: "svaralternativ",
  title: "Svaralternativ",
  fields: [textIdField, answerTitleField, alertTextField],
  preview: {
    select: {
      title: questionTitleField.name,
      subtitle: textIdField.name,
    },
  },
};
