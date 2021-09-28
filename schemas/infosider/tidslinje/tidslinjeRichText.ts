import { TidslinjePunkt } from "./TidslinjePreview";
import richText, { block, styles } from "../richText/richText";
import pasChildren from "../../../components/pasChildren";

export default {
  ...richText,
  name: "tidslinjeRichText",
  title: "TidslinjePreview richtext",
  of: [
    {
      ...block,
      styles: [
        styles.normal,
        { title: "Punkt", value: "tidslinjepunkt", blockEditor: { render: pasChildren(TidslinjePunkt) } },
      ],
    },
  ],
};
