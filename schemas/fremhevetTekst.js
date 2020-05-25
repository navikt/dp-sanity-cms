import React from 'react';
import FremhevetTekst, { FremhevetTekstIkon } from '../components/FremhevetTekst';

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
    prepare(selection) {
      return {
        innhold: selection.innhold,
      };
    },
    component: FremhevetTekst,
  },
};
