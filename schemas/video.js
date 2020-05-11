import React from 'react';
import Video from 'react-icons/lib/md/ondemand-video';

export default {
  type: 'object',
  name: 'video',
  title: 'Video',
  icon: Video,
  fields: [
    {
      name: 'title',
      title: 'Beskrivelse',
      subtitle: 'Kort beskrivelse så innholdsforvalter vet hva videoen inneholder, vises ikke for bruker',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.url,
        media: Video,
      };
    },
  },
};
