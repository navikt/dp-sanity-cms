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
      description: 'Vises for skjermleser',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      description:
        'Ikke lenk til youtube eller andre tjenester som kan finne på å spore brukerne våre. qbrick.com regnes som trygt. (https://video.qbrick.com/play2/embed/player?accountId=763...)',
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
