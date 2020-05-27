import React from 'react';
import externalLink from './annotations/externalLink';
import internalLink from './annotations/internalLink';
import { blocks, decorators, styles } from './richText';
import visForAnnotation from './annotations/visForAnnotation';

export default {
  name: 'relatertInformasjonRichText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [styles.normal],
      lists: [],
      marks: {
        decorators: [decorators.utkast],
        annotations: [externalLink, internalLink, visForAnnotation],
      },
    },
  ],
};
