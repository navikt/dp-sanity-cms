import React from 'react';
import { filtreringsValg } from './utils/filtreringsValg';

export default {
  name: 'visFor',
  type: 'object',
  fieldsets: [
    {
      name: 'filtrering',
      title: 'Filtrering',
    },
  ],
  fields: filtreringsValg.map((it) => ({
    type: 'boolean',
    name: it,
    fieldset: 'filtrering',
  })),
};
