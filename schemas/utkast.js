import React from 'react';
import { UtkastIkon, Utkast } from '../components/Utkast';

export default {
  type: 'object',
  name: 'utkast',
  title: 'Utkast',
  icon: UtkastIkon,
  fields: [
    {
      name: 'innhold',
      title: 'Innhold',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      innhold: 'innhold',
    },
    prepare(selection) {
      return {
        innhold: selection.innhold,
      };
    },
    component: Utkast,
  },
};
