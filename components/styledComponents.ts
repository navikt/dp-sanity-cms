import styled, { css } from 'styled-components';

const descriptionAfter = (description: string) => css`
  &::after {
      content: ' (${description})';
      opacity: .5;
      font-size: .7em;
    }
`;

export const BolkHeader = styled.span`
  font-size: 2rem;
  ${descriptionAfter('bolk')}
`;

export const AvsnittHeader = styled.span`
  font-size: 1.7rem;
  ${descriptionAfter('avsnitt')}
`;
