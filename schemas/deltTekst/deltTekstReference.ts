import DeltTekstPreview, { DeltTekstIkon } from './DeltTekstPreview';

export default {
  name: 'deltTekstReference',
  type: 'object',
  title: 'Delt tekst',
  icon: DeltTekstIkon,
  fields: [
    {
      name: 'deltTekst',
      type: 'reference',
      description: 'Den delte teksten må være "Published" for å dukke opp i denne lista',
      to: [
        {
          type: 'deltTekst',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'deltTekst.title',
      innhold: 'deltTekst.innhold',
    },
    prepare: (selection) => selection,
    component: DeltTekstPreview,
  },
};
