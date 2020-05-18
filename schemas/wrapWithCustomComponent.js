import React from 'react';
import WrapIcon from 'react-icons/lib/md/move-to-inbox';
import WrapWithCustomComponentPreview from '../components/WrapWithCustomComponentPreview';

const availableWrappers = ['Grå boks'];

export default {
  type: 'object',
  name: 'wrapWithCustomComponent',
  title: 'Wrap with custom component',
  icon: WrapIcon,
  fields: [
    {
      title: 'Komponent',
      name: 'komponent',
      type: 'string',
      options: {
        list: availableWrappers,
      },
    },
    {
      name: 'innhold',
      title: 'Innhold',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      komponent: 'komponent',
      innhold: 'innhold',
    },
    prepare(selection) {
      return {
        komponent: selection.komponent,
        tekst: selection.tekst,
      };
    },
    component: WrapWithCustomComponentPreview,
  },
};
