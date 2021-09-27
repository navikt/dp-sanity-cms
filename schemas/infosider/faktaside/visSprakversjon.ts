import { supportedLanguages } from "../../utils/languages";

export default {
  name: "visSprakversjon",
  title: "Vis Sprakversjon",
  type: "object",
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "boolean",
  })),
};
