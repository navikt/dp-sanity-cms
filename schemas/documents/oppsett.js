export default {
  name: 'oppsett',
  title: 'Oppsett',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel',
      description: 'Hovedtittel på forsiden nav.no/arbeid',
    },
    {
      name: 'eksterneLenker',
      title: 'Forsidelenker',
      description: 'Lenker på forsiden som leder bruker til andre apper',
      type: 'array',
      of: [
        {
          type: 'forsideLenke',
        },
      ],
    },
    {
      name: 'faktasideSortering',
      title: 'Sortering faktasider',
      type: 'array',
      description: 'Brukes for å bestemme rekkefølge på lenker i menyen',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'faktaSide',
            },
          ],
        },
      ],
    },
    {
      name: 'folketrygdensGrunnbellop',
      type: 'number',
      validation: (Rule) => [
        Rule.required().min(99800).error('Dette tallet ser for lite ut'),
        Rule.max(250000).error('Dette tallet ser for stort ut'),
      ],
      description: 'Brukes for å konvertere G til kroner i frontenden',
    },
  ],
  preview: {
    prepare: (selection) => ({
      title: 'Oppsett',
    }),
  },
};
