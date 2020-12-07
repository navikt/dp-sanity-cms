import React from 'react';
import visForAnnotationDeltTekst from './annotations/visForAnnotationDeltTekst';
import link from '../richText/annotations/link';
import { decorators, styles } from '../richText/richText';

export default {
  title: 'Rich Text',
  name: 'deltRichText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [styles.normal, styles.h4, styles.h3, styles.h2, styles.h2_M_Meny, styles.h2_no_background],
      marks: {
        decorators: [
          decorators.strong,
          decorators.em,
          decorators.utkast,
          decorators.foreslattStykes,
          decorators.GtilNOK,
        ],
        annotations: [link, visForAnnotationDeltTekst],
      },
    },
    { type: 'customComponent' },
    { type: 'deltFremhevetTekst' },
    { type: 'video' },
    { type: 'tileggsInformasjon' },
    { type: 'tidslinje' },
  ],
};
