import Web from 'react-icons/lib/md/web';

export default {
  name: 'faktaSide',
  type: 'document',
  title: 'Faktaside',
  icon: Web,
  fields: [
    {
      name: 'publisert',
      type: 'publisert',
      validation: (Rule) => Rule.required(),
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
      name: 'sistOppdatert',
      type: 'localeString',
      title: 'Sist oppdatert',
      description: 'feks. "Denne siden blir fortløpende oppdatert, sist oppdatert 20.05.2020 15:30"',
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
