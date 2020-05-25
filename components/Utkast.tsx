import * as React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const InlineUtkastIkonStyle = styled.span`
  font-size: 0.8rem;
  padding: 0.1rem 0.2rem;
  font-weight: 600;
  background-color: yellow;
  color: black !important;
`;

export const InlineUtkastIkon = () => <InlineUtkastIkonStyle>U</InlineUtkastIkonStyle>;

export const InlineUtkast = styled.span`
  background-color: yellow;
  &::after {
    content: ' (utkast)';
    opacity: 0.6;
    font-size: 0.8rem;
  }
`;

const UtkastIkonStyle = styled(InlineUtkastIkonStyle)`
  border: 0.1rem black solid;
  border-radius: 0.2rem;
`;

export const UtkastIkon = () => <UtkastIkonStyle>U</UtkastIkonStyle>;

export const UtkastStyle = styled.div`
  background-color: #ff02;
  border: 0.2rem yellow solid;
  padding: 1rem;
`;

const Label = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: lightblue;
  padding: 0.4rem 0.8rem;
  font-weight: bold;
  opacity: 0.8;
`;

export const Utkast = (props) => {
  return (
    <UtkastStyle>
      <Label>
        <UtkastIkon /> Utkast
      </Label>
      <BlockContent blocks={props.value.innhold} />
    </UtkastStyle>
  );
};
