import React from 'react';
import link from '../richText/annotations/link';
import visForAnnotation from '../richText/annotations/visForAnnotation';
import { TidslinjePunkt } from './TidslinjePreview';
import { decorators, styles } from '../richText/richText';

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
