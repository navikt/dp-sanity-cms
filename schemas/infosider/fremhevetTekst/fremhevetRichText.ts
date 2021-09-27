import richText, { block, styles } from "../richText/richText";

export default {
  ...richText,
  title: "Fremhevet Rich Text",
  name: "fremhevetRichText",
  of: [
    {
      ...block,
      styles: [styles.normal],
    },
  ],
};
