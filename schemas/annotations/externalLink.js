import LinkIcon from 'react-icons/lib/fa/paperclip';

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
      description: 'Read https://css-tricks.com/use-target_blank/',
      type: 'boolean',
    },
  ],
};
