import styled, { css } from 'styled-components';

const descriptionAfter = (description: string) => css`
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

export const BolkHeader = styled.span`
  font-size: 2.2rem;
  ${descriptionAfter('bolk')}
`;

export const AvsnittHeader = styled.span`
  font-size: 1.5rem;
  ${descriptionAfter('avsnitt')}
`;
