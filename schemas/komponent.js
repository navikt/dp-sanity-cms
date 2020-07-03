import React from 'react';
import Gift from 'react-icons/lib/go/gift';

const tilgjengeligeKomponenter = ['DagpengeKalkulator - normal', 'DagpengeKalkulator - lærling'];

export default {
  name: 'customComponent',
  title: 'Komponent',
  type: 'object',
  icon: Gift,
  fields: [
    {
      title: 'Velg komponent',
      name: 'komponent',
      type: 'string',
      description: 'Nye komponenter må opprettes av en utvikler i sanity-studio og i frontenden',
      validation: (Rule) => Rule.required(),
      options: {
        list: tilgjengeligeKomponenter,
      },
    },
  ],
  preview: {
    select: {
      title: 'komponent',
    },
    prepare(selection) {
      return {
        ...selection,
        subtitle: 'React-komponent',
      };
    },
  },
};
