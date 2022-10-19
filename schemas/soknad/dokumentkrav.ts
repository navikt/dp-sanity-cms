import { descriptionTextField, helpTextField, questionTextField, textIdField, titleTextField } from "./common-fields";

export const dokumentkrav = {
  type: "document",
  name: "dokumentkrav",
  title: "Dokumentkrav",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [textIdField, titleTextField, descriptionTextField, helpTextField],
  preview: {
    select: {
      title: questionTextField.name,
      subtitle: textIdField.name,
    },
  },
};
