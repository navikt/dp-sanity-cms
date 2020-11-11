import * as React from 'react';
import styled from 'styled-components';
import InlinePreview from '../../components/InlinePreview';

const color = '#f006';

export const InlineStrykesIkon = styled.span`
  font-size: 0.8rem;
  padding: 0.1rem 0.2rem;
  font-weight: 600;
  background-color: ${color};
  color: black !important;
  &::after {
    content: 'S';
  }
`;

export const InlineStrykes = (props) => <InlinePreview {...props} label="foreslått strykes" color={color} />;
