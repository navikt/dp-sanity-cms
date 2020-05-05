import React from 'react';
import Book from 'react-icons/lib/go/book';

export default {
  type: 'document',
  name: 'deltTekst',
  title: 'Delt tekst',
  icon: Book,
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
        media: Book,
      };
    },
  },
};
