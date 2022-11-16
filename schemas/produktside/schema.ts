import { produktsideAccordion } from "./produktside-component-schemas/produktsideAccordion";
import { produktsideButton } from "./produktside-component-schemas/produktsideButton";
import { produktsideFilteredContent } from "./produktside-component-schemas/produktsideFilteredContent";
import { produktsideFilterMenu } from "./produktside-component-schemas/produktsideFilterMenu";
import { produktsideReadMore } from "./produktside-component-schemas/produktsideReadMore";
import { produktsideKortFortalt } from "./produktsideKortFortalt";
import { produktsideRichText } from "./produktsideRichText";
import { produktsideSection } from "./produktsideSection/produktsideSection";
import { produktsideSectionReference } from "./produktsideSection/produktsideSectionReference";
import { produktsideSectionRichText } from "./produktsideSection/produktsideSectionRichText";
import { produktsideSettings } from "./produktsideSettings";
import { produktsideText } from "./produktsideText";
import { produktsideAccordionWithRichText } from "./produktside-component-schemas/produktsideAccordionWithRichText";
import { produktsideReadMoreWithRichText } from "./produktside-component-schemas/produktsideReadMoreWithRichText";
import { produktsideComponentRichText } from "./produktside-component-schemas/produktsideComponentRichText";

const componentSchemas = [
  produktsideAccordion,
  produktsideAccordionWithRichText,
  produktsideButton,
  produktsideComponentRichText,
  produktsideFilteredContent,
  produktsideFilterMenu,
  produktsideReadMore,
  produktsideReadMoreWithRichText,
];

export const produktsideSchemas = [
  ...componentSchemas,
  produktsideKortFortalt,
  produktsideRichText,
  produktsideSection,
  produktsideSectionReference,
  produktsideSectionRichText,
  produktsideSettings,
  produktsideText,
];

export {
  produktsideAccordion,
  produktsideAccordionWithRichText,
  produktsideButton,
  produktsideComponentRichText,
  produktsideFilteredContent,
  produktsideFilterMenu,
  produktsideReadMore,
  produktsideReadMoreWithRichText,
  produktsideKortFortalt,
  produktsideRichText,
  produktsideSection,
  produktsideSectionReference,
  produktsideSectionRichText,
  produktsideSettings,
  produktsideText,
};
