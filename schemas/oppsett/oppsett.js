import React from 'react';
import VelgSituasjoner from './VelgSituasjoner';

export default {
  name: 'oppsett',
  title: 'Oppsett',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: `filtreringsvalg`,
      type: `array`,
      of: [
        {
          type: `string`,
        },
      ],
    },
    {
      title: 'Test',
      name: 'categorySet',
      type: 'array',
      of: [{ type: 'string' }],
      inputComponent: VelgSituasjoner,
    },
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel',
      description: 'Hovedtittel på forsiden nav.no/arbeid',
    },
    {
      name: 'beskrivelse',
      type: 'localeText',
      title: 'Beskrivelse',
      description: 'Kort beskrivelse av innholdet på landingssiden for ingress, søkemotorer og sosiale medier',
    },
    {
      name: 'sideoversiktLenker',
      title: 'Lenker sideoversikt',
      type: 'array',
      description:
        'Brukes for å bestemme innhold og rekkefølge på lenker i menyen på forside og på faktasider. Interne sider som ikke blir eksplisitt lagt til her vil automatisk dukke opp sist i menyen',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'faktaSide',
            },
          ],
        },
        {
          type: 'eksternLenke',
        },
      ],
    },
    {
      name: 'komIgangLenker',
      title: 'Snarveier',
      type: 'array',
      of: [
        {
          type: 'eksternLenke',
        },
      ],
    },
    {
      name: 'folketrygdensGrunnbellop',
      type: 'number',
      validation: (Rule) => [
        Rule.required().min(99800).error('Dette tallet ser for lite ut'),
        Rule.max(250000).error('Dette tallet ser for stort ut'),
      ],
      description: 'Brukes for å konvertere G til kroner i frontenden',
    },
    {
      name: 'notifikasjoner',
      type: 'array',
      of: [
        {
          type: 'notifikasjon',
        },
      ],
    },
  ],
  preview: {
    prepare: (selection) => ({
      title: 'Oppsett',
    }),
  },
};
