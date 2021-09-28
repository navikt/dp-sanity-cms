export const localeValueRequired = (Rule) =>
  Rule.custom((value) => !!value?.no || !!value?.en || "Denne må fylles ut på minst et språk");
