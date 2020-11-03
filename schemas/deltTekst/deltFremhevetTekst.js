import React from 'react';
import FremhevetTekst, { FremhevetTekstIkon } from '../fremhevetTekst/FremhevetTekst';

export default {
  type: 'object',
  name: 'deltFremhevetTekst',
  title: 'Fremhevet tekst i delt tekst',
  icon: FremhevetTekstIkon,
  fields: [
    {
      name: 'innhold',
      title: 'Innhold',
      type: 'deltFremhevetRichText',
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
