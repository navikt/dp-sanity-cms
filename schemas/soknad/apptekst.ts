import { textIdField, valueTextField } from "./common-fields";

export const apptekst = {
  type: "document",
  name: "apptekst",
  title: "Generelle tekster",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [textIdField, valueTextField],
  preview: {
    select: {
      title: textIdField.name,
      subtitle: valueTextField.name,
    },
  },
};
