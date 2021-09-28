import styled, { css } from "styled-components";

export const headerMixin = (description: string) => css`
  &::after {
    content: " (${description})";
    opacity: 0.5;
    font-size: 0.7em;
  }
  &::before {
    content: "";
    display: block;
    height: 1em;
  }
`;

export const H2Header = styled.span`
  font-size: 2.2rem;
  ${headerMixin("Overskrift")}
`;

export const H2HeaderMMeny = styled.span`
  font-size: 2.2rem;
  ${headerMixin("Overskrift m/meny")}
`;

export const H2NoBackround = styled.span`
  font-size: 2.2rem;
  ${headerMixin("Overskrift uten bakgrunn")}
`;

export const H3Header = styled.span`
  font-size: 1.5rem;
  ${headerMixin("Mellomtittel")}
`;

export const H4Header = styled.span`
  font-size: 1.3rem;
  ${headerMixin("Liten mellomtittel")}
`;
