import { MdTextFields } from "react-icons/md";
import { timeline } from "../soknad/timeline";
import { alertTextField, readMoreField } from "../soknad/common-fields";

export const mineDagpengerRichText = {
  type: "document",
  name: "mineDagpengerRichText",
  title: "Mine dagpenger rik tekster",
  icon: MdTextFields,
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: "nb",
  },
  fields: [
    {
      title: "Rich tekst nøkkel",
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
