import { produktsideSectionReferenceName } from "./produktsideSectionReference";

export const produktsideSectionRichText = {
  title: "Innholdsseksjon Rich Text",
  name: "produktsideSectionRichText",
  type: "array",
  of: [
    {
      type: "block",
    },
    { type: "customComponent" },
    { type: produktsideSectionReferenceName },
  ],
};
