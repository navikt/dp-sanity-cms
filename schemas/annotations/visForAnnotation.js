import React from 'react';
import { InlineVisForPreview, InlineVisForIkon } from '../../components/VisForPreview';

export default {
  name: 'visForAnnotation',
  type: 'object',
  title: 'Vis merket tekst for',
  blockEditor: {
    icon: InlineVisForIkon,
    render: InlineVisForPreview,
  },
  fields: [
    {
      name: 'visFor',
      type: 'visFor',
      title: 'Valg',
    },
  ],
};
