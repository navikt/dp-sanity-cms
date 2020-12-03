import React from 'react';
import { filtreringsValg } from '../utils/filtreringsValg';
import VelgSituasjoner from '../oppsett/VelgSituasjoner';

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
    {
      title: 'Situasjoner',
      name: 'situasjoner',
      type: 'array',
      of: [{ type: 'string' }],
      inputComponent: VelgSituasjoner,
    },
    ...filtreringsValg.map((it) => ({
      type: 'boolean',
      name: it,
      fieldset: 'situasjoner',
    })),
  ],
};
