import React from 'react';
import link from '../richText/annotations/link';
import { decorators, styles } from '../richText/richText';
import visForAnnotation from '../richText/annotations/visForAnnotation';

export default {
  name: 'relatertInformasjonRichText',
  title: 'Relatert innformasjon richtext',
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
        annotations: [link, visForAnnotation],
      },
    },
  ],
};
