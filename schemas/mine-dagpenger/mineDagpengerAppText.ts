import { textIdField, valueTextField } from "../soknad/common-fields";
import { MdTitle } from "react-icons/md";

export const mineDagpengerAppText = {
  type: "document",
  name: "mineDagpengerAppText",
  icon: MdTitle,
  title: "Mine dagpenger generelle tekster",
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
