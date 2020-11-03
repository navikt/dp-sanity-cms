import React from 'react';
import TillegsInformasjonPreview, { TillegsInfoIkon } from './TillegsInformasjonPreview';

export default {
  type: 'object',
  name: 'tileggsInformasjon',
  title: 'Tillegsinnformasjon',
  icon: TillegsInfoIkon,
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'innhold',
      type: 'tilleggsInfoRichText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      innhold: 'innhold',
    },
    prepare: (selection) => selection,
    component: (props) => <TillegsInformasjonPreview blocks={props.value.innhold} title={props.value.title} />,
  },
};
