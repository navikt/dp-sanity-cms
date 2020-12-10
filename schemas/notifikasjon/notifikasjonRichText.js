import React from 'react';
import link from '../richText/annotations/link';
import { decorators, styles } from '../richText/richText';

export default {
  title: 'Notifikasjon Rich Text',
  name: 'notifikasjonRichText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [styles.normal],
      marks: {
        decorators: [
          decorators.strong,
          decorators.em,
          decorators.utkast,
          decorators.foreslattStykes,
          decorators.GtilNOK,
        ],
        annotations: [link],
      },
    },
  ],
};
