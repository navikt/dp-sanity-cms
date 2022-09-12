/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// @ts-nocheck
import { ProduktsideSectionPreview, ProduktsideSectionIcon } from "./ProduktsideSectionPreview";

export const produktsideSectionReferenceName = "produktsideSectionReference";
const produktsideSectionName = "produktsideSection";

export const produktsideSectionReference = {
  name: produktsideSectionReferenceName,
  type: "object",
  title: "Innholdsseksjon",
  icon: ProduktsideSectionIcon,
  fields: [
    {
      name: produktsideSectionName,
      type: "reference",
      description: 'Innholdsseksjon må være "Published" for å dukke opp i denne lista',
      to: [{ type: produktsideSectionName }],
      options: {
        filter: ({ document }) => {
          const usedReferences = document?.content
            .filter(({ _type }) => _type === produktsideSectionReferenceName)
            .map(({ produktsideSection }) => produktsideSection?._ref);

          return {
            filter: '!(_id in path("drafts.**")) && !(_id in $usedReferences) && (__i18n_lang == $baseLanguage)',
            params: {
              usedReferences,
              baseLanguage: document?.__i18n_lang,
            },
          };
        },
      },
    },
  ],
  preview: {
    select: {
      title: "produktsideSection.title",
    },
    prepare: (selection) => selection,
    component: ProduktsideSectionPreview,
  },
};
