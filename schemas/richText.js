import React from 'react';
import externalLink from './annotations/externalLink';
import internalLink from './annotations/internalLink';
import { BolkHeader, AvsnittHeader } from '../components/styledComponents';

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      of: [
        {
          type: 'GtoNOK',
        },
      ],
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2 - Bolk', value: 'h2', blockEditor: { render: BolkHeader } },
        { title: 'H3 - Avsnitt', value: 'h3', blockEditor: { render: AvsnittHeader } },
        { title: 'H4', value: 'h4' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [externalLink, internalLink],
      },
    },
    {
      type: 'customComponent',
    },
    {
      type: 'reference',
      to: [{ type: 'deltTekst' }],
    },
  ],
};
