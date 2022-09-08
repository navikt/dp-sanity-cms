import { innholdsseksjonReferenceName } from "./innholdsseksjonReference";

export const innholdsseksjonRichText = {
  title: "Innholdsseksjon Rich Text",
  name: "innholdsseksjonRichText",
  type: "array",
  of: [
    {
      type: "block",
    },
    { type: "customComponent" },
    { type: innholdsseksjonReferenceName },
  ],
};
