import { alertTextField, answerTextField, questionTextField, textIdField } from "./common-fields";

export const svaralternativ = {
  type: "document",
  name: "svaralternativ",
  title: "Svaralternativ",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [textIdField, answerTextField, alertTextField],
  preview: {
    select: {
      title: questionTextField.name,
      subtitle: textIdField.name,
    },
  },
};
