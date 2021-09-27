import richText, { block, decorators, styles } from "../richText/richText";
import link from "../richText/annotations/link";

export default {
  ...richText,
  title: "Oppsett Rich Text",
  name: "oppsettRichText",
  of: [
    {
      ...block,
      styles: [styles.normal],
      marks: {
        decorators: [decorators.strong, decorators.em],
        annotations: [link],
      },
    },
  ],
};
