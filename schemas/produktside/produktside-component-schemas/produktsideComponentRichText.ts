import { produktsideBlockStyles } from "../produktside-styles/produktside-styles";
import { produktsideBlockDecorators } from "../produktside-decorators/produktsideBlockDecorators";
import { produktsideAccordion } from "./produktsideAccordion";
import { produktsideButton } from "./produktsideButton";
import { produktsideReadMore } from "./produktsideReadMore";
import { produktsideReadMoreWithRichText } from "./produktsideReadMoreWithRichText";
import { produktsideAccordionWithRichText } from "./produktsideAccordionWithRichText";

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
