import { textIdField } from "../soknad/common-fields";
import { GtoNOKDecorator } from "./produktside-decorators/produktside-decorators";

export const produktsideText = {
  type: "document",
  name: "produktsideText",
  title: "Generelle tekster",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [
    textIdField,
    {
      title: "Verdi",
      type: "array",
      name: "valueBlock",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            annotations: [],
            decorators: [GtoNOKDecorator],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: textIdField.name,
      subtitle: "valueBlock.name",
    },
  },
};
