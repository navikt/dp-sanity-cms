import { timeline } from "./timeline";

export const startside = {
  type: "document",
  name: "startside",
  title: "Startside",
  i18n: true,
  // eslint-disable-next-line camelcase
  __experimental_actions: ["update", "publish", "create"],
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [
    {
      type: "array",
      name: "body",
      title: "Innhold",
      of: [
        {
          type: "block",
        },
        {
          type: timeline.name,
        },
      ],
    },
  ],
};
