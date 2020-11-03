import React from 'react';
import link from '../richText/annotations/link';
import { decorators, styles } from '../richText/richText';
import visForAnnotationDeltTekst from './annotations/visForAnnotationDeltTekst';

export default {
  title: 'Fremhevet Rich Text',
  name: 'deltFremhevetRichText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [styles.normal, styles.h3, styles.h4],
      marks: {
        decorators: [decorators.strong, decorators.em, decorators.utkast, decorators.GtilNOK],
        annotations: [link, visForAnnotationDeltTekst],
      },
    },
    { type: 'customComponent' },
    { type: 'video' },
  ],
};
