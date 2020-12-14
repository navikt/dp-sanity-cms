import { MdLink } from 'react-icons/lib';
import styled, { css } from 'styled-components';
import React from 'react';

const color = '#2276fc';

export const LenkePreview = styled.span`
  color: ${color};
  min-width: 1rem;
  text-decoration: underline;
  display: inline-block; // for å vise lenker som mangler tekst
  ${(props) =>
    props.knapp &&
    css`
      display: block;
      width: fit-content;
      padding: 0.3rem 1rem;
      margin: 0.5rem 0;
      border: 0.2rem solid ${color};
      border-radius: 0.4rem;
    `};
`;

export default {
  name: 'link',
  type: 'object',
  title: 'Lenke',
  icon: MdLink,
  blockEditor: {
    render: (props) => <LenkePreview knapp={props.knapp}>{props.children}</LenkePreview>,
  },
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'URL',
    },
    {
      title: 'Vis som knapp',
      name: 'knapp',
      type: 'boolean',
    },
  ],
};
