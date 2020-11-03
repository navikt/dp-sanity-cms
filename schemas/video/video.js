import React from 'react';
import VideoPreview, { VideoIkon } from './VideoPreview';

export default {
  type: 'object',
  name: 'video',
  title: 'Video',
  icon: VideoIkon,
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
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare: (selection) => selection,
    component: (props) => <VideoPreview name={props.value.title} url={props.value.url} />,
  },
};
