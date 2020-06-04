import React from 'react';
import link from './annotations/link';
import { H2Header, H3Header, H2NoBackround, H2HeaderMMeny, H4Header } from '../components/styledComponents';
import { InlineUtkastIkon, InlineUtkast } from '../components/Utkast';
import visForAnnotation from './annotations/visForAnnotation';

export const styles = {
  normal: { title: 'Normal', value: 'normal' },
  h2: { title: 'Overskrift', value: 'h2', blockEditor: { render: H2Header } },
  h2_M_Meny: { title: 'Overskrift - m/meny', value: 'h2-m-meny', blockEditor: { render: H2HeaderMMeny } },
  h2_no_background: {
    title: 'Overskrift - u/bakgrunn',
    value: 'h2-no-background',
    blockEditor: { render: H2NoBackround },
  },
  h3: { title: 'Mellomtittel', value: 'h3', blockEditor: { render: H3Header } },
  h4: { title: 'Liten mellomtittel', value: 'h4', blockEditor: { render: H4Header } },
};

export const blocks = {
  gTilNok: { type: 'GtilNOK' },
};

export const decorators = {
  utkast: { title: 'Utkast', value: 'utkast', blockEditor: { icon: InlineUtkastIkon, render: InlineUtkast } },
  strong: { title: 'Strong', value: 'strong' },
  em: { title: 'Emphasis', value: 'em' },
};

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      of: [blocks.gTilNok],
      styles: [styles.normal, styles.h2, styles.h2_M_Meny, styles.h2_no_background, styles.h3, styles.h4],
      marks: {
        decorators: [decorators.strong, decorators.em, decorators.utkast],
        annotations: [link, visForAnnotation],
      },
    },
    { type: 'customComponent' },
    { type: 'fremhevetTekst' },
    { type: 'video' },
    { type: 'visForBlokk' },
  ],
};
