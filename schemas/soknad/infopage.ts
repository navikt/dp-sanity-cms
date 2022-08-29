import { timeline } from "./timeline";
import { alertTextField, readMoreField } from "./common-fields";

export const infopage = {
  type: "document",
  name: "infopage",
  title: "Infoside",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [
    {
      title: "Sti",
      name: "slug",
      type: "slug",
    },
    {
      type: "array",
      name: "body",
      title: "Innhold",
      of: [
        {
          type: "block",
        },
        { type: timeline.name },
        { type: alertTextField.name },
        { type: readMoreField.name },
      ],
    },
  ],
  preview: {
    select: {
      slug: "slug.current",
    },
    prepare({ slug }: { slug: string }) {
      return {
        title: `${slug.charAt(0).toUpperCase()}${slug.slice(1)}`,
      };
    },
  },
};
