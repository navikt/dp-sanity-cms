import {
  alertTextField,
  answerOptionsArray,
  descriptionTextField,
  helpTextField,
  keyField,
  requiredAnswerOptionsArray,
  subFaktumArray,
  questionTitleField,
  valgFaktumTypeField,
} from "./commonFields";

export const valgFaktum = {
  type: "document",
  name: "valgFaktum",
  title: "Spørsmål med alternativ",
  fields: [
    keyField,
    questionTitleField,
    valgFaktumTypeField,
    descriptionTextField,
    helpTextField,
    alertTextField,
    answerOptionsArray,
    subFaktumArray,
    requiredAnswerOptionsArray,
  ],
  preview: {
    select: {
      title: questionTitleField.name,
      subtitle: keyField.name,
    },
  },
};
