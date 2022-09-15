import { textIdField, valueTextField } from "../soknad/common-fields";

export const produktsideText = {
  type: "document",
  name: "produktsideText",
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
