import React from 'react';
import Gift from 'react-icons/lib/go/gift';

const availableComponents = ['DagpengeKalkulator - normal'];

export default {
  name: 'customComponent',
  title: 'Custom Component',
  type: 'object',
  icon: Gift,
  fields: [
    {
      title: 'Component',
      name: 'component',
      type: 'string',
      options: {
        list: availableComponents,
      },
    },
  ],
  preview: {
    select: {
      title: 'component',
    },
    prepare(props) {
      return {
        title: props.title,
        subtitle: 'Custom React-komponent',
      };
    },
  },
};
