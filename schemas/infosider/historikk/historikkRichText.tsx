import { block, decorators, styles } from "../richText/richText";
import link from "../richText/annotations/link";

export default {
  title: "HistorikkRichText",
  name: "historikkRichText",
  type: "array",
  of: [
    {
      ...block,
      styles: [styles.normal, styles.h2, styles.h3],
      marks: {
        decorators: [decorators.strong, decorators.em, decorators.utkast, decorators.foreslattStykes],
        annotations: [link],
      },
    },
  ],
};
