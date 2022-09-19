import {
  descriptionTextField,
  helpTextField,
  questionTextField,
  errorMessageTextField,
  textIdField,
  unitField,
} from "./common-fields";

export const faktum = {
  type: "document",
  name: "faktum",
  title: "Spørsmål",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [textIdField, questionTextField, descriptionTextField, errorMessageTextField, helpTextField, unitField],
  preview: {
    select: {
      title: questionTextField.name,
      subtitle: textIdField.name,
    },
  },
};
