import { innholdsseksjon } from "./innholdsseksjon/innholdsseksjon";
import { innholdsseksjonReference } from "./innholdsseksjon/innholdsseksjonReference";
import { innholdsseksjonRichText } from "./innholdsseksjon/innholdsseksjonRichText";
import { produktsideRichText } from "./produktsideRichText";
import { siteSettings } from "./siteSettings";

export const produktsideSchemas = [
  innholdsseksjon,
  innholdsseksjonReference,
  produktsideRichText,
  siteSettings,
  innholdsseksjonRichText,
];
export { innholdsseksjon, innholdsseksjonReference, produktsideRichText, siteSettings, innholdsseksjonRichText };
