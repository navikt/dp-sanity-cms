import React from 'react';
import link from '../richText/annotations/link';
import { decorators, styles } from '../richText/richText';
import visForAnnotation from '../richText/annotations/visForAnnotation';

export default {
  title: 'Kort Fortalt Rich Text',
  name: 'kortFortaltRichText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [styles.normal, styles.h4, styles.h3],
      marks: {
        decorators: [
          decorators.strong,
          decorators.em,
          decorators.utkast,
          decorators.foreslattStykes,
          decorators.GtilNOK,
        ],
        annotations: [link, visForAnnotation],
      },
    },
  ],
};
