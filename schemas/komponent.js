import React from 'react';
import Gift from 'react-icons/lib/go/gift';

const availableComponents = ['DagpengeKalkulator - normal'];

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
      options: {
        list: availableComponents,
      },
    },
  ],
  preview: {
    select: {
      title: 'komponent',
    },
    prepare(props) {
      return {
        title: props.title,
        subtitle: 'React-komponent',
      };
    },
  },
};
