import { descriptionTextField, helpTextField, questionTextField, textIdField, unitField } from "./commonFields";

export const faktum = {
  type: "document",
  name: "faktum",
  title: "Spørsmål",
  i18n: true,
  initialValue: {
    __i18n_lang: "nb"
  },
  fields: [textIdField, questionTextField, descriptionTextField, helpTextField, unitField],
  preview: {
    select: {
      title: questionTextField.name,
      subtitle: textIdField.name,
    },
  },
};
