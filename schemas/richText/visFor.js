import React from 'react';
import { filtreringsValg } from '../utils/filtreringsValg';

export default {
  name: 'visFor',
  title: 'Vis for',
  type: 'object',
  fieldsets: [
    {
      name: 'config',
      title: 'Skjul for',
    },
    {
      name: 'situasjoner',
      title: 'Situasjoner',
    },
  ],
  fields: [
    {
      type: 'boolean',
      name: 'skjulFor',
      title: 'Ovmendt filtrering',
      description:
        'Skru på denne for å skjule teksten for valgte situasjoner istedenfor å vise. (Vil fortsatt vises dersom bruker ikke har valgt filtrering eller velger "Ingen valg passer").',
      fieldset: 'config',
    },
    ...filtreringsValg.map((it) => ({
      type: 'boolean',
      name: it,
      fieldset: 'situasjoner',
    })),
  ],
};
