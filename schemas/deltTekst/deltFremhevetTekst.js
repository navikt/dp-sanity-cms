import React from 'react';
import FremhevetTekstPreview, { FremhevetTekstIkon } from '../fremhevetTekst/FremhevetTekstPreview';

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
    component: (selection) => <FremhevetTekstPreview blocks={selection.value.innhold} />,
  },
};
