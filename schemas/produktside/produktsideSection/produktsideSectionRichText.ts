import { produktsideSectionReferenceName } from "./produktsideSectionReference";
import { GtoNOKDecorator } from "../produktside-decorators/produktside-decorators";

export const produktsideSectionRichText = {
  title: "Innholdsseksjon Rich Text",
  name: "produktsideSectionRichText",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        decorators: [{ title: "Strong", value: "strong" }, { title: "Emphasis", value: "em" }, GtoNOKDecorator],
      },
    },
    { type: "customComponent" },
    { type: produktsideSectionReferenceName },
  ],
};
