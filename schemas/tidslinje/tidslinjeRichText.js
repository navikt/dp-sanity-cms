import React from 'react';
import link from '../annotations/link';
import visForAnnotation from '../annotations/visForAnnotation';
import { TidslinjePunkt } from './TidslinjePreview';
import { decorators, styles } from '../objects/richText';

export default {
  name: 'tidslinjeRichText',
  title: 'TidslinjePreview richtext',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Punkt', value: 'tidslinjepunkt', blockEditor: { render: TidslinjePunkt } }, styles.normal],
      marks: {
        decorators: [decorators.strong, decorators.em, decorators.utkast, decorators.GtilNOK],
        annotations: [link, visForAnnotation],
      },
    },
  ],
};
