import React from 'react';
import visForAnnotationDeltTekst from '../annotations/visForAnnotationDeltTekst';
import link from '../annotations/link';
import { blocks, decorators, styles } from './richText';

export default {
  title: 'Rich Text',
  name: 'deltRichText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      of: [blocks.gTilNok],
      styles: [styles.h2, styles.h2_M_Meny, styles.h2_no_background, styles.h3, styles.h4, styles.normal],
      marks: {
        decorators: [decorators.strong, decorators.em, decorators.utkast, decorators.GtilNOK],
        annotations: [link, visForAnnotationDeltTekst],
      },
    },
    { type: 'customComponent' },
    { type: 'fremhevetTekst' },
    { type: 'video' },
    { type: 'tileggsInformasjon' },
  ],
};
