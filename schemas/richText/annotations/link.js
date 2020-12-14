import { MdLink } from 'react-icons/lib';
import styled, { css } from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';

const color = '#2276fc';

const Style = styled.span`
  color: ${color};
  min-width: 1rem;
  text-decoration: underline;
  ${(props) =>
    props.isEmpty &&
    css`
      box-shadow: 0 0 0 0.2rem red;
      &::after {
        content: ' (Denne lenketeksten er for kort)';
        opacity: 0.6;
        font-size: 0.8em;
        color: black;
        text-decoration: none;
      }
    `};
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

export const LenkePreview = (props) => {
  const ref = useRef(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const innerText = ref.current?.innerText;
    setIsEmpty(innerText.length < 2);
  }, []);

  return <Style ref={ref} {...props} isEmpty={isEmpty} />;
};

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
