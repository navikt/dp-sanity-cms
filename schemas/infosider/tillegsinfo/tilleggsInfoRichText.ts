import richText, { block, styles } from "../richText/richText";

export default {
  ...richText,
  name: "tilleggsInfoRichText",
  title: "Tillegsinfo richtext",
  of: [
    {
      ...block,
      styles: [styles.normal],
    },
  ],
};
