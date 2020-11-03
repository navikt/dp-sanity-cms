import React from 'react';
import FremhevetTekstPreview, { FremhevetTekstIkon } from './FremhevetTekstPreview';

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
    component: (selection) => <FremhevetTekstPreview blocks={selection.value.innhold} />,
  },
};
