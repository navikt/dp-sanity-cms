import { alertTextField, answerTextField, textIdField } from "./common-fields";

export const svaralternativ = {
  type: "document",
  name: "svaralternativ",
  title: "Svaralternativ",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [
    textIdField,
    answerTextField,
    {
      name: "activateAlertText",
      title: "Aktiver varseltekst",
      type: "boolean",
    },
    alertTextField,
  ],
  preview: {
    select: {
      title: answerTextField.name,
      subtitle: textIdField.name,
    },
  },
};
