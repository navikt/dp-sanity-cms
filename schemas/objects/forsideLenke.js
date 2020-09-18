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
      validation: (Rule) => Rule.required().max(40).warning('Lange titler vil ta for mye plass på forsiden'),
    },
    {
      title: 'Url',
      name: 'url',
      type: 'localeUrl',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Beskrivelse',
      name: 'description',
      type: 'localeText',
      validation: (Rule) => Rule.max(160).warning('Lange beskrivelser vil ta for mye plass på forsiden'),
    },
  ],
  preview: {
    select: {
      title: 'title.no',
      subtitle: 'url.no',
    },
  },
};
