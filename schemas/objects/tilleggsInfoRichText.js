import React from 'react';
import link from '../annotations/link';
import { decorators, styles } from './richText';
import visForAnnotation from '../annotations/visForAnnotation';

export default {
  name: 'tilleggsInfoRichText',
  title: 'Tillegsinfo richtext',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [styles.normal],
      marks: {
        decorators: [decorators.strong, decorators.em, decorators.utkast, decorators.GtilNOK],
        annotations: [link, visForAnnotation],
      },
    },
  ],
};
