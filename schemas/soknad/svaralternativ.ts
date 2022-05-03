import { alertTextField, answerTextField, questionTextField, textIdField } from "./commonFields";

export const svaralternativ = {
  type: "document",
  name: "svaralternativ",
  title: "Svaralternativ",
  fields: [textIdField, answerTextField, alertTextField],
  preview: {
    select: {
      title: questionTextField.name,
      subtitle: textIdField.name,
    },
  },
};
