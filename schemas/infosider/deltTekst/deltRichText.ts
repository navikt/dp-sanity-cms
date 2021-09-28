import richText from "../richText/richText";

export default {
  ...richText,
  title: "Rich Text",
  name: "deltRichText",
  of: richText.of.filter((it) => it.type !== "deltTekstReference"),
};
