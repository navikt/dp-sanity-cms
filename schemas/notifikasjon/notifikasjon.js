import React from 'react';

export default {
  type: 'object',
  name: 'notifikasjon',
  title: 'Notifikasjon',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'localeString',
    },
    {
      name: 'innhold',
      type: 'localeNotifikasjonRichText',
    },
    {
      name: 'visPaaForside',
      title: 'Vis på nav.no/arbeid',
      type: 'boolean',
    },
    {
      name: 'visPaaSider',
      title: 'Vis på side:',
      type: 'array',
      of: [
        {
          type: 'reference',
          description: 'Faktasiden må være "Published" for å dukke opp i denne lista',
          to: { type: 'faktaSide' },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.no',
      subtitle: 'innhold.no',
    },
  },
};
