import richText, { block, styles } from "../richText/richText";

export default {
  ...richText,
  title: "Kort Fortalt Rich Text",
  name: "kortFortaltRichText",
  of: [
    {
      ...block,
      styles: [styles.normal],
    },
  ],
};
