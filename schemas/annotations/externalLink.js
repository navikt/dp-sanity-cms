import LinkIcon from 'react-icons/lib/fa/external-link';

export default {
  name: 'link',
  type: 'object',
  title: 'External link',
  icon: LinkIcon,
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'URL',
    },
    {
      title: 'Åpne i nytt vindu',
      name: 'blank',
      description: 'Helst ikke bruk dette',
      type: 'boolean',
    },
    {
      title: 'Vis som knapp',
      name: 'knapp',
      type: 'boolean',
    },
  ],
};
