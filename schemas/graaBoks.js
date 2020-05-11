import React from 'react';
import Boks from 'react-icons/lib/md/check-box-outline-blank';
import styled from 'styled-components';

const Style = styled.div`
  background-color: #dedede;
  color: #444;
  font-size: 1.3rem;
  font-weight: bold;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  type: 'object',
  name: 'graaBoks',
  title: 'Grå boks',
  icon: Boks,
  fields: [
    {
      name: 'startSlutt',
      title: 'Velg start/slutt på grå boks',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: ['Start', 'Slutt'],
      },
    },
  ],
  preview: {
    select: {
      startSlutt: 'startSlutt',
    },
    component: (props) => (
      <Style>{props.value.startSlutt === 'Start' ? '<Start grå boks>' : '</Slutt grå boks>'}</Style>
    ),
  },
};
