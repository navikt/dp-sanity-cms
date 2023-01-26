export const produktsideGeneralText = {
  type: "document",
  name: "produktsideGeneralText",
  title: "Produktside generelle tekster",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [
    {
      type: "string",
      name: "textId",
      title: "Tekstnøkkel",
      readonly: false, //Skal være true senere,
    },
    {
      type: "string",
      name: "textValue",
      title: "Verdi",
    },
  ],
  preview: {
    select: {
      title: "textId",
      subtitle: "textValue",
    },
  },
};
