import styled, { css } from 'styled-components';

const headerMixin = (description: string) => css`
  &::after {
      content: ' (${description})';
      opacity: .5;
      font-size: .7em;
    }
  &::before {
    content: '';
    display: block;
    height: 1em;
  }
`;

export const H2Header = styled.span`
  font-size: 2.2rem;
  ${headerMixin('H2')}
`;

export const H2HeaderMMeny = styled.span`
  font-size: 2.2rem;
  ${headerMixin('H2 m/meny')}
`;

export const H2NoBackround = styled.span`
  font-size: 2.2rem;
  ${headerMixin('H2 uten bakgrunn')}
`;

export const H3Header = styled.span`
  font-size: 1.5rem;
  ${headerMixin('H3')}
`;

export const H4Header = styled.span`
  font-size: 1.3rem;
  ${headerMixin('H4')}
`;

export const Lenke = styled.span`
  color: blue;
`;
