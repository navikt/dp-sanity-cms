/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// @ts-nocheck
import { InnholdsseksjonPreview, InnholdsseksjonIkon } from "./InnholdsseksjonPreview";

export const innholdsseksjonReferenceName = "innholdsseksjonReference";
const innholdsseksjonName = "innholdsseksjon";

export const innholdsseksjonReference = {
  name: innholdsseksjonReferenceName,
  type: "object",
  title: "Innholdsseksjon",
  icon: InnholdsseksjonIkon,
  fields: [
    {
      name: innholdsseksjonName,
      type: "reference",
      description: 'Innholdsseksjon må være "Published" for å dukke opp i denne lista',
      to: [{ type: innholdsseksjonName }],
      options: {
        filter: ({ document }) => {
          const usedReferences = document?.innhold
            .filter(({ _type }) => _type === innholdsseksjonReferenceName)
            .map(({ innholdsseksjon }) => innholdsseksjon?._ref);

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
      title: "innholdsseksjon.title",
      innhold: "innholdsseksjon.innhold",
    },
    prepare: (selection) => selection,
    component: InnholdsseksjonPreview,
  },
};
