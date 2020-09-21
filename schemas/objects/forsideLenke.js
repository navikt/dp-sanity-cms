import React from 'react';

export default {
  name: 'forsideLenke',
  title: 'Forsidelenke',
  type: 'object',
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Url',
      name: 'url',
      type: 'localeUrl',
    },
    {
      title: 'Beskrivelse',
      name: 'description',
      type: 'localeText',
    },
  ],
  preview: {
    select: {
      title: 'title.no',
      subtitle: 'url.no',
    },
  },
};
