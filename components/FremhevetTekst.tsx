import * as React from 'react';
import styled from 'styled-components';
import BlockContent from './BlockContent';

export const FremhevetTekstIkon = () => <>❤️</>;

const Style = styled.div`
  position: relative;
  padding: 1rem;
  border: solid lightblue 0.2rem;
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

const FremhevetTekst = (props) => {
  return (
    <Style>
      <Label>
        <FremhevetTekstIkon /> Fremhevet tekst
      </Label>
      <BlockContent blocks={props.value.innhold} />
    </Style>
  );
};

export default FremhevetTekst;
