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
      title: 'Component',
      name: 'component',
      type: 'string',
      options: {
        list: availableWrappers,
      },
    },
    {
      name: 'tekst',
      title: 'Tekst',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      component: 'component',
      tekst: 'tekst',
    },
    prepare(selection) {
      return {
        component: selection.component,
        tekst: selection.tekst,
      };
    },
    component: WrapWithCustomComponentPreview,
  },
};
