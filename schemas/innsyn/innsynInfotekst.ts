import { timeline } from "../soknad/timeline";
import { alertTextField, readMoreField } from "../soknad/common-fields";

export const innsynInfotekst = {
  type: "document",
  name: "innsynInfotekst",
  title: "Innsyn info tekster",
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [
    {
      title: "Info tekst nøkkel",
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
