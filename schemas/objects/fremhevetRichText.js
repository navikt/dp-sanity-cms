import React from 'react';
import link from '../annotations/link';
import { blocks, decorators, styles } from './richText';
import visForAnnotation from '../annotations/visForAnnotation';

export default {
  title: 'Fremhevet Rich Text',
  name: 'fremhevetRichText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      of: [blocks.gTilNok],
      styles: [styles.normal, styles.h3, styles.h4],
      marks: {
        decorators: [decorators.strong, decorators.em, decorators.utkast, decorators.GtilNOK],
        annotations: [link, visForAnnotation],
      },
    },
    { type: 'customComponent' },
    { type: 'video' },
  ],
};
