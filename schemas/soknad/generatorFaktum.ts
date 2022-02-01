import {
  alertTextField,
  descriptionTextField,
  faktumArray,
  generatorFaktumListTypeField,
  generatorFaktumTypeField,
  helpTextField,
  keyField,
  requiredAnswerOptionsArray,
  questionTitleField,
} from "./commonFields";

export const generatorFaktum = {
  type: "document",
  name: "generatorFaktum",
  title: "Generator Faktum",
  fields: [
    keyField,
    questionTitleField,
    generatorFaktumTypeField,
    generatorFaktumListTypeField,
    descriptionTextField,
    helpTextField,
    alertTextField,
    faktumArray,
    requiredAnswerOptionsArray,
  ],
  initialValue: {
    type: "generator",
  },
  preview: {
    select: {
      title: questionTitleField.name,
      subtitle: keyField.name,
    },
  },
};
