import React from 'react';
import FremhevetTekst, { FremhevetTekstIkon } from './FremhevetTekst';

export default {
  type: 'object',
  name: 'fremhevetTekst',
  title: 'Fremhevet tekst',
  icon: FremhevetTekstIkon,
  fields: [
    {
      name: 'innhold',
      title: 'Innhold',
      type: 'fremhevetRichText',
    },
  ],
  preview: {
    select: {
      innhold: 'innhold',
    },
    prepare: (selection) => selection,
    component: (selection) => <FremhevetTekst blocks={selection.value.innhold} />,
  },
};
