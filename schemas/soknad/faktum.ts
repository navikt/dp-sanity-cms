import { descriptionTextField, helpTextField, questionTextField, textIdField, unitField } from "./common-fields";

export const faktum = {
  type: "document",
  name: "faktum",
  title: "Spørsmål",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [textIdField, questionTextField, descriptionTextField, helpTextField, unitField],
  preview: {
    select: {
      title: questionTextField.name,
      subtitle: textIdField.name,
    },
  },
};
