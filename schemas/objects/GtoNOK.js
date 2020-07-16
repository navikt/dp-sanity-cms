import React from 'react';
import Money from 'react-icons/lib/fa/money';
import styled from 'styled-components';

export const GtilNOKIcon = Money;

const Style = styled.span`
  background-color: limegreen;
  padding: 0.1rem 0.3rem;
  > * {
    margin-right: 0.2rem;
  }
`;

export const GtilNOKPeview = (props) => {
  return (
    <Style>
      <Money />
      {props.G}G
    </Style>
  );
};

export default {
  name: 'GtilNOK',
  type: 'object',
  title: 'Grunnbeløp til kroner',
  icon: GtilNOKIcon,
  fields: [
    {
      type: 'number',
      name: 'G',
      title: 'Grunnbeløp',
      description: 'Grunnbeløpet må oppdateres i frontenden ved G-justering.',
    },
  ],
  preview: {
    select: {
      G: 'G',
    },
    prepare: (selection) => selection,
    component: (props) => <GtilNOKPeview G={props.value.G} />,
  },
};
