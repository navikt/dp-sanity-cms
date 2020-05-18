import Web from 'react-icons/lib/md/web';

export default {
  name: 'faktaSide',
  type: 'document',
  title: 'Faktaside',
  icon: Web,
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel',
      description: 'Det vil bli generert språkversjoner for alle språk som har en oversatt tittel',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'url til siden',
      options: {
        source: 'title.no',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Beskrivelse',
      description: 'Kort beskrivelse av siden for søkemotorer og sosiale medier.',
    },
    {
      name: 'body',
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
