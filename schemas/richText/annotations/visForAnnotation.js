import React from 'react';
import { InlineVisForPreview, InlineVisForIkon } from '../VisForPreview';

export default {
  name: 'visForAnnotation',
  type: 'object',
  title: 'Vis merket tekst',
  blockEditor: {
    icon: InlineVisForIkon,
    render: InlineVisForPreview,
  },
  fields: [
    {
      name: 'visFor',
      type: 'visFor',
      title: 'Vis for:',
      description:
        'Her kan du velge hvilke situasjoner denne teksten skal vises for. Bruker vil få mulighet til å filtrere på situasjoner i frontend, og tekster som ikke matcher valget bruker gjør vil bli skjult.',
    },
  ],
};
