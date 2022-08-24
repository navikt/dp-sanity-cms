/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// @ts-nocheck
import { innholdsseksjon } from "./innholdsseksjon";
import { InnholdsseksjonPreview, InnholdsseksjonIkon } from "./InnholdsseksjonPreview";

export const innholdsseksjonReferenceName = "innholdsseksjonReference";

export const innholdsseksjonReference = {
  name: innholdsseksjonReferenceName,
  type: "object",
  title: innholdsseksjon.title,
  icon: InnholdsseksjonIkon,
  fields: [
    {
      name: innholdsseksjon.name,
      type: "reference",
      description: 'Innholdsseksjon må være "Published" for å dukke opp i denne lista',
      to: [{ type: innholdsseksjon.name }],
      options: {
        filter: ({ document }) => {
          const usedReferences = document?.innhold
            .filter(({ _type }) => _type === innholdsseksjonReferenceName)
            .map(({ innholdsseksjon }) => innholdsseksjon?._ref);

          return {
            filter: '!(_id in path("drafts.**")) && !(_id in $usedReferences)',
            params: {
              usedReferences,
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
