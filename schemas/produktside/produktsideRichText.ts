import { innholdsseksjonReferenceName } from "./innholdsseksjon/innholdsseksjonReference";

export const commonBlocks = [
  {
    type: "block",
  },
  { type: "customComponent" },
  { type: innholdsseksjonReferenceName },
];

export const produktsideRichText = {
  title: "Produktside Rich Text",
  name: "produktsideRichText",
  type: "array",
  of: [{ type: innholdsseksjonReferenceName }],
};
