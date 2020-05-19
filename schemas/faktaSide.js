import Web from 'react-icons/lib/md/web';
import { supportedLanguages } from './utils/languages';

export default {
  name: 'faktaSide',
  type: 'document',
  title: 'Faktaside',
  icon: Web,
  fields: [
    {
      name: 'publiser',
      type: 'object',
      fields: supportedLanguages.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: 'boolean',
      })),
    },
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL (slug)',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title.no',
        maxLength: 96,
      },
    },
    {
      name: 'ingress',
      type: 'localeText',
      title: 'Ingress',
      description: 'Kort beskrivelse av innholdet for ingress, landingsside, søkemotorer og sosiale medier',
    },
    {
      name: 'innhold',
      type: 'localeRichText',
      title: 'Innhold',
    },
  ],
  preview: {
    select: {
      title: 'title.no',
      subtitle: 'description.no',
    },
  },
};
