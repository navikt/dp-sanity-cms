import Money from 'react-icons/lib/fa/money';

export default {
  name: 'GtilNOK',
  type: 'object',
  title: 'Grunnbeløp til kroner',
  icon: Money,
  fields: [
    {
      type: 'number',
      name: 'G',
      title: 'Grunnbeløp',
      description: 'Grunnbeløpet må oppdateres i frontenden ved G-justering.',
    },
  ],
};
