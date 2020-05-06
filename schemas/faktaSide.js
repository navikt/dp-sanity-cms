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
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'url til siden',
      options: {
        source: 'title.nb',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Description',
      description: 'Kort beskrivelse av siden for søkemotorer og sosiale medier.',
    },
    {
      name: 'body',
      type: 'localeRichText',
      title: 'Body',
    },
  ],
  preview: {
    select: {
      title: 'title.nb',
      subtitle: 'description.nb',
    },
  },
};
