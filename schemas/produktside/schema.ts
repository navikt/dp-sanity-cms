import { produktsideAccordion } from "./produktside-component-schemas/produktsideAccordion";
import { produktsideReadMore } from "./produktside-component-schemas/produktsideReadMore";
import { produktsideKortFortalt } from "./produktsideKortFortalt";
import { produktsideRichText } from "./produktsideRichText";
import { produktsideSection } from "./produktsideSection/produktsideSection";
import { produktsideSectionReference } from "./produktsideSection/produktsideSectionReference";
import { produktsideSectionRichText } from "./produktsideSection/produktsideSectionRichText";
import { produktsideSettings } from "./produktsideSettings";
import { produktsideText } from "./produktsideText";

const componentSchemas = [produktsideAccordion, produktsideReadMore];

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
  produktsideReadMore,
  produktsideKortFortalt,
  produktsideRichText,
  produktsideSection,
  produktsideSectionReference,
  produktsideSectionRichText,
  produktsideSettings,
  produktsideText,
};
