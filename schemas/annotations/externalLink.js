import LinkIcon from 'react-icons/lib/fa/external-link';
import { Lenke } from '../../components/styledComponents';

export default {
  name: 'link',
  type: 'object',
  title: 'Ekstern lenke',
  icon: LinkIcon,
  blockEditor: {
    render: Lenke,
  },
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
