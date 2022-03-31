import {
  alertTextField,
  baseFaktumTypeField,
  descriptionTextField,
  helpTextField,
  keyField,
  requiredAnswerOptionsArray,
  questionTitleField,
  unitField,
} from "./commonFields";

export const basefaktum = {
  type: "document",
  name: "baseFaktum",
  title: "Inputfelt",
  fields: [
    keyField,
    questionTitleField,
    baseFaktumTypeField,
    unitField,
    descriptionTextField,
    helpTextField,
    alertTextField,
    requiredAnswerOptionsArray,
  ],
  preview: {
    select: {
      title: questionTitleField.name,
      subtitle: keyField.name,
    },
  },
};


