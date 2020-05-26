import React from 'react';
import { VisForIkon, VisForPreview } from '../components/VisForPreview';

export default {
  type: 'object',
  name: 'visForBlokk',
  title: 'Vis for',
  icon: VisForIkon,
  fields: [
    {
      name: 'visFor',
      type: 'visFor',
      title: 'Vis for',
    },
    {
      name: 'innhold',
      title: 'Innhold',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      innhold: 'innhold',
      visFor: 'visFor',
    },
    prepare: (selection) => selection,
    component: VisForPreview,
  },
};
