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
      title: 'Open in new tab',
      name: 'blank',
      type: 'boolean',
    },
  ],
};
