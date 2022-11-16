import { produktsideSectionReferenceName } from "./produktsideSectionReference";
import { produktsideAccordion } from "../produktside-component-schemas/produktsideAccordion";
import { produktsideReadMore } from "../produktside-component-schemas/produktsideReadMore";
import { produktsideBlockStyles } from "../produktside-styles/produktside-styles";
import { produktsideFilteredContent } from "../produktside-component-schemas/produktsideFilteredContent";
import { produktsideFilterMenu } from "../produktside-component-schemas/produktsideFilterMenu";
import { produktsideButton } from "../schema";
import { produktsideBlockDecorators } from "../produktside-decorators/produktsideBlockDecorators";
import { produktsideAccordionWithRichText } from "../produktside-component-schemas/produktsideAccordionWithRichText";
import { produktsideReadMoreWithRichText } from "../produktside-component-schemas/produktsideReadMoreWithRichText";

export const produktsideSectionRichText = {
  title: "Innholdsseksjon Rich Text",
  name: "produktsideSectionRichText",
  type: "array",
  of: [
    {
      type: "block",
      styles: produktsideBlockStyles,
      marks: {
        decorators: produktsideBlockDecorators,
      },
    },
    { type: "customComponent" },
    { type: produktsideSectionReferenceName },
    { type: produktsideAccordion.name },
    { type: produktsideAccordionWithRichText.name },
    { type: produktsideButton.name },
    { type: produktsideReadMore.name },
    { type: produktsideReadMoreWithRichText.name },
    { type: produktsideFilteredContent.name },
    { type: produktsideFilterMenu.name },
  ],
};
