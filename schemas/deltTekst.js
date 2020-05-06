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
    },
    {
      name: 'tekst',
      title: 'Tekst',
      type: 'localeRichText',
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
