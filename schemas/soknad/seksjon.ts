import { descriptionTextField, helpTextField, sectionTitleField, textIdField } from "./commonFields";

export const seksjon = {
  type: "document",
  name: "seksjon",
  title: "Seksjon",
  fields: [textIdField, sectionTitleField, descriptionTextField, helpTextField],
  preview: {
    select: {
      title: sectionTitleField.name,
      subtitle: textIdField.name,
    },
  },
};
