import * as React from 'react';
import styled from 'styled-components';
import InlinePreview from '../../components/InlinePreview';

const yellow = '#ff0a';

export const InlineUtkastIkon = styled.span`
  font-size: 0.8rem;
  padding: 0.1rem 0.2rem;
  font-weight: 600;
  background-color: ${yellow};
  color: black !important;
  &::after {
    content: 'U';
  }
`;

export const InlineUtkast = (props) => <InlinePreview {...props} label="utkast" color={yellow} />;
