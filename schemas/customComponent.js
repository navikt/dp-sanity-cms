import React from 'react';
import Gift from 'react-icons/lib/go/gift';

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
