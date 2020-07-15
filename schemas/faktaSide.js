import Web from 'react-icons/lib/md/web';

export default {
  name: 'faktaSide',
  type: 'document',
  title: 'Faktaside',
  icon: Web,
  fields: [
    {
      name: 'visSprakversjon',
      type: 'visSprakversjon',
      title: 'Vis språkversjon',
      validation: (Rule) =>
        Rule.custom((sprak) => sprak?.no || sprak?.en || 'Siden må være tilgjengelig på minst et språk'),
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
      description: 'Velg en god url. Hvis den må endres i ettertid vil dette knekke lenker som går til denne siden',
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
    {
      name: 'relatertInformasjon',
      type: 'localeRelatertInformasjonRichText',
    },
  ],
  preview: {
    select: {
      title: 'title.no',
      subtitle: 'description.no',
    },
  },
};
