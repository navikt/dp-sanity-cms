import GoBrowser from 'react-icons/lib/go/browser';

export default {
  name: 'faktaSide',
  type: 'document',
  title: 'Faktaside',
  icon: GoBrowser,
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'url til siden',
      options: {
        source: 'title.nb',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Description',
      description: 'Beskrivelse av siden som brukes av google og seo. Beskriv kort hva siden inneholder.',
    },
    {
      name: 'body',
      type: 'localeRichText',
      title: 'Body',
    },
  ],
  preview: {
    select: {
      title: 'title.nb',
    },
  },
};
