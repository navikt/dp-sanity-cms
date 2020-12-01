import React from 'react';

export default {
  name: 'eksternLenke',
  title: 'Ekstern lenke',
  type: 'object',
  fields: [
    {
      title: 'Tittel',
      name: 'tittel',
      type: 'localeString',
    },
    {
      title: 'Url',
      name: 'url',
      type: 'localeUrl',
    },
    {
      title: 'Beskrivelse',
      name: 'beskrivelse',
      type: 'localeText',
    },
  ],
  preview: {
    select: {
      title: 'tittel.no',
      subtitle: 'url.no',
    },
  },
};
