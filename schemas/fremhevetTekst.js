import React from 'react';
import WrapIcon from 'react-icons/lib/md/move-to-inbox';
import FremhevetTekst from '../components/FremhevetTekst';

export default {
  type: 'object',
  name: 'fremhevetTekst',
  title: 'Fremhevet tekst',
  icon: WrapIcon,
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
