import { produktsideButton } from "./produktside-component-schemas/produktsideButton";
import { produktsideFilteredContent } from "./produktside-component-schemas/produktsideFilteredContent";
import { produktsideFilterMenu } from "./produktside-component-schemas/produktsideFilterMenu";
import { produktsideKortFortalt } from "./produktsideKortFortalt";
import { produktsideRichText } from "./produktsideRichText";
import { produktsideSection } from "./produktsideSection/produktsideSection";
import { produktsideSectionReference } from "./produktsideSection/produktsideSectionReference";
import { produktsideSectionRichText } from "./produktsideSection/produktsideSectionRichText";
import { produktsideSettings } from "./produktsideSettings";
import { produktsideGeneralText } from "./produktsideGeneralText";
import { produktsideAccordionWithRichText } from "./produktside-component-schemas/produktsideAccordionWithRichText";
import { produktsideReadMoreWithRichText } from "./produktside-component-schemas/produktsideReadMoreWithRichText";
import { produktsideComponentRichText } from "./produktside-component-schemas/produktsideComponentRichText";

const componentSchemas = [
  produktsideAccordionWithRichText,
  produktsideButton,
  produktsideComponentRichText,
  produktsideFilteredContent,
  produktsideFilterMenu,
  produktsideReadMoreWithRichText,
];

export const produktsideSchemas = [
  ...componentSchemas,
  produktsideKortFortalt,
  produktsideGeneralText,
  produktsideRichText,
  produktsideSection,
  produktsideSectionReference,
  produktsideSectionRichText,
  produktsideSettings,
];

export {
  produktsideAccordionWithRichText,
  produktsideButton,
  produktsideComponentRichText,
  produktsideFilteredContent,
  produktsideFilterMenu,
  produktsideGeneralText,
  produktsideKortFortalt,
  produktsideReadMoreWithRichText,
  produktsideRichText,
  produktsideSection,
  produktsideSectionReference,
  produktsideSectionRichText,
  produktsideSettings,
};
