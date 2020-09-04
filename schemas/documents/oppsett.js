export default {
  name: 'oppsett',
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
      description: 'Brukes for å konvertere G til kroner i frontenden',
    },
  ],
  preview: {
    prepare: (selection) => ({
      title: 'Oppsett',
    }),
  },
};
