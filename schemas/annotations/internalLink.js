import LinkIcon from 'react-icons/lib/fa/paperclip';

export default {
  name: 'internalLink',
  type: 'object',
  title: 'Internal link',
  icon: LinkIcon,
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'side' }],
    },
  ],
};
