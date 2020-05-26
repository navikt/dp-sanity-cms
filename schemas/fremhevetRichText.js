import React from 'react';
import externalLink from './annotations/externalLink';
import internalLink from './annotations/internalLink';
import { blocks, decorators, styles } from './richText';
import visForAnnotation from './annotations/visForAnnotation';

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
        decorators: [decorators.strong, decorators.em, decorators.utkast],
        annotations: [externalLink, internalLink, visForAnnotation],
      },
    },
    { type: 'customComponent' },
    { type: 'video' },
    { type: 'visForBlokk' },
  ],
};
