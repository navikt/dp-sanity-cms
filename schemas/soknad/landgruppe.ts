import { alertTextField, textIdField } from "./common-fields";

export const landgruppe = {
  type: "document",
  name: "landgruppe",
  title: "Landgruppe",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [textIdField, alertTextField],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
};
