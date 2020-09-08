import Web from 'react-icons/lib/md/web';

export default {
  name: 'faktaSide',
  type: 'document',
  title: 'Faktaside',
  icon: Web,
  fieldsets: [
    {
      name: 'oppsett',
      title: 'Oppsett',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel',
      fieldset: 'oppsett',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL (slug)',
      fieldset: 'oppsett',
      validation: (Rule) => Rule.required(),
      description: 'Velg en god url. Hvis den må endres i ettertid vil dette knekke lenker som går til denne siden',
      options: {
        source: 'title.no',
        maxLength: 96,
      },
    },
    {
      name: 'visSprakversjon',
      type: 'visSprakversjon',
      title: 'Vis språkversjon',
      fieldset: 'oppsett',
      validation: (Rule) =>
        Rule.custom((sprak) => sprak?.no || sprak?.en || 'Siden må være tilgjengelig på minst et språk'),
    },
    {
      fieldset: 'oppsett',
      name: 'visIngenValgPasser',
      title: 'Tilpass innhold: Vis "ingen valg passer"',
      type: 'boolean',
    },
    {
      name: 'ingress',
      type: 'localeText',
      title: 'Ingress',
      description: 'Kort beskrivelse av innholdet for ingress, landingsside, søkemotorer og sosiale medier',
    },
    {
      name: 'kortFortalt',
      type: 'localeKortFortaltRichText',
      title: 'Kort fortalt',
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
