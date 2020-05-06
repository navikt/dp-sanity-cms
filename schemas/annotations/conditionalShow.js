import React from 'react';
import LightBulb from 'react-icons/lib/fa/lightbulb-o';

export default {
  name: 'conditionalShow',
  type: 'object',
  title: 'Conditional Show',
  blockEditor: {
    icon: LightBulb,
    render: (props) => {
      console.log(props);
      return <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>;
    },
  },
  fields: ['permittert', 'student', 'synneva'].map((it) => ({
    type: 'boolean',
    name: it,
  })),
};
