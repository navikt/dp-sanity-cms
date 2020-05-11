import React from 'react';
import externalLink from './annotations/externalLink';
import internalLink from './annotations/internalLink';
import { H2Header, H3Header, H2NoBackround } from '../components/styledComponents';

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
        { title: 'H2', value: 'h2', blockEditor: { render: H2Header } },
        { title: 'H2 - uten bakgrunn', value: 'h2-no-background', blockEditor: { render: H2NoBackround } },
        { title: 'H3', value: 'h3', blockEditor: { render: H3Header } },
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
    {
      type: 'video',
    },
    { type: 'graaBoks' },
  ],
};
