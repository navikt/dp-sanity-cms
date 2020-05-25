import * as React from 'react';
import styled from 'styled-components';

const InlineUtkastIkonStyle = styled.div`
  font-size: 0.8rem;
  padding: 0.1rem;
  font-weight: bold;
  background-color: yellow;
  color: black !important;
`;

export const InlineUtkastIkon = () => <InlineUtkastIkonStyle>U</InlineUtkastIkonStyle>;

export const InlineUtkastStyle = styled.span`
  background-color: yellow;
  &::after {
    content: ' (utkast)';
    opacity: 0.6;
    font-size: 0.8rem;
  }
`;
