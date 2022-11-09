import { produktsideSectionReferenceName } from "./produktsideSectionReference";
import { GtoNOKDecorator } from "../produktside-decorators/produktside-decorators";
import { produktsideAccordion } from "../produktside-component-schemas/produktsideAccordion";
import { produktsideReadMore } from "../produktside-component-schemas/produktsideReadMore";
import { produktsideBlockStyles } from "../produktside-styles/produktside-styles";
import { produktsideFilteredContent } from "../produktside-component-schemas/produktsideFilteredContent";
import { produktsideFilterMenu } from "../produktside-component-schemas/produktsideFilterMenu";

export const produktsideSectionRichText = {
  title: "Innholdsseksjon Rich Text",
  name: "produktsideSectionRichText",
  type: "array",
  of: [
    {
      type: "block",
      styles: produktsideBlockStyles,
      marks: {
        decorators: [{ title: "Strong", value: "strong" }, { title: "Emphasis", value: "em" }, GtoNOKDecorator],
      },
    },
    { type: "customComponent" },
    { type: produktsideSectionReferenceName },
    { type: produktsideAccordion.name },
    { type: produktsideReadMore.name },
    { type: produktsideFilteredContent.name },
    { type: produktsideFilterMenu.name },
  ],
};
