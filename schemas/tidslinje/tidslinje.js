import React from 'react';
import Tidslinje, { TidslinjeIkon } from './TidslinjePreview';

export default {
  type: 'object',
  name: 'tidslinje',
  title: 'Tidslinje',
  icon: TidslinjeIkon,
  fields: [
    {
      name: 'innhold',
      type: 'tidslinjeRichText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      innhold: 'innhold',
    },
    prepare: (selection) => selection,
    component: (props) => <Tidslinje blocks={props.value.innhold} />,
  },
};
