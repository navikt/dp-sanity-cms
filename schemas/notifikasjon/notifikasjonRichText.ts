import link from "../infosider/richText/annotations/link";
import richText, { block, decorators, styles } from "../infosider/richText/richText";

// Notifikasjoner brukes på tvers av apper, så lurt å holde denne så nær default som mulig så native block-content-to-react holder i frontend uten custom serializere https://github.com/sanity-io/block-content-to-react
export default {
  ...richText,
  title: "Notifikasjon Rich Text",
  name: "notifikasjonRichText",
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
