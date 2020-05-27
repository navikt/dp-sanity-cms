import React from 'react';
import externalLink from './annotations/externalLink';
import internalLink from './annotations/internalLink';
import { decorators, styles } from './richText';
import visForAnnotation from './annotations/visForAnnotation';

export default {
  name: 'relatertInformasjonRichText',
  type: 'array',
  description: 'Legg gjerne lenkene i en bulletpoint-liste, da blir formatteringen i frontend bedre',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [styles.normal],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [decorators.utkast],
        annotations: [externalLink, internalLink, visForAnnotation],
      },
    },
  ],
};
