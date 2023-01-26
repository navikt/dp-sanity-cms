import { produktsideBlockDecorators } from "../produktside-decorators/produktsideBlockDecorators";
import { produktsideBlockStyles } from "../produktside-styles/produktside-styles";
import { produktsideAccordion } from "./produktsideAccordion";
import { produktsideAccordionWithRichText } from "./produktsideAccordionWithRichText";
import { produktsideButton } from "./produktsideButton";
import { produktsideReadMore } from "./produktsideReadMore";
import { produktsideReadMoreWithRichText } from "./produktsideReadMoreWithRichText";

export const produktsideComponentRichText = {
  title: "Komponent Rich Text",
  name: "produktsideComponentRichText",
  type: "array",
  of: [
    {
      type: "block",
      styles: produktsideBlockStyles,
      marks: {
        decorators: produktsideBlockDecorators,
      },
    },
    { type: produktsideAccordion.name },
    { type: produktsideAccordionWithRichText.name },
    { type: produktsideButton.name },
    { type: produktsideReadMore.name },
    { type: produktsideReadMoreWithRichText.name },
  ],
};
