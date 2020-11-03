import React from 'react';
import visForAnnotation from '../../richText/annotations/visForAnnotation';

export default {
  ...visForAnnotation,
  name: 'visForAnnotationDeltTekst',
  fields: [
    ...visForAnnotation.fields,
    {
      name: 'visPaaSider',
      title: 'Vis på side:',
      description:
        'Her kan du tilpasse den delte teksten for bruk på forskjellige faktasider ved å velge hvilke faktasider den markerte teksten skal vises på. Dersom du ikke velger noen sider vil teksten vises for alle sider der den brukes.',
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
};
