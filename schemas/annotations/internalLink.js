import LinkIcon from 'react-icons/lib/md/link';

export default {
  name: 'internalLink',
  type: 'object',
  title: 'Intern lenke',
  icon: LinkIcon,
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'faktaSide' }],
    },
  ],
};
