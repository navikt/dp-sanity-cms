export const keyValuePair = {
  type: "object",
  name: "keyValuePair",
  fields: [
    {
      type: "string",
      name: "key",
      title: "Tekstnøkkel",
      readOnly: true,
    },
    {
      type: "text",
      name: "value",
      title: "Tekst",
    },
  ],
};
