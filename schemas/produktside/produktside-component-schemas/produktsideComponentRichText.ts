import { produktsideBlockDecorators } from "../produktside-decorators/produktsideBlockDecorators";
import { produktsideBlockStyles } from "../produktside-styles/produktside-styles";
import { produktsideAccordionWithRichText } from "./produktsideAccordionWithRichText";
import { produktsideButton } from "./produktsideButton";
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
    { type: produktsideAccordionWithRichText.name },
    { type: produktsideButton.name },
    { type: produktsideReadMoreWithRichText.name },
  ],
};
