import React from 'react';
import ShortText from 'react-icons/lib/md/short-text';

export default {
  type: 'document',
  name: 'deltTekst',
  title: 'Delt tekst',
  icon: ShortText,
  fields: [
    {
      name: 'title',
      title: 'Beskrivelse',
      type: 'string',
      description:
        'Kun for intern bruk i sanity. Dette er tittelen du bruker for å trekke inn en delt tekst i innholdet på en faktaside. Vises ikke for bruker',
    },
    {
      name: 'innhold',
      title: 'Innhold',
      type: 'localeDeltRichText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: ShortText,
      };
    },
  },
};
