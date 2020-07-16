import React from 'react';
import link from '../annotations/link';
import { blocks, decorators, styles } from './richText';
import visForAnnotation from '../annotations/visForAnnotation';

export default {
  name: 'tilleggsInfoRichText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      of: [blocks.gTilNok],
      styles: [styles.normal],
      marks: {
        decorators: [decorators.strong, decorators.em, decorators.utkast],
        annotations: [link, visForAnnotation],
      },
    },
  ],
};
