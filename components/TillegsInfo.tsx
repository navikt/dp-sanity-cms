import * as React from 'react';
import BlockContentPreview from './BlockContentPreview';
import styled from 'styled-components';

export const TillegsInfoIkon = () => <>‍📎️</>;

const Tittel = styled.p`
  font-weight: bold;
`;

const TillegsInfo = (props) => (
  <BlockContentPreview
    label={
      <>
        <TillegsInfoIkon /> Tilleggsinfo
      </>
    }
    color="mistyrose"
    before={<Tittel>{props.value.title}</Tittel>}
    blocks={props.value.innhold}
  />
);

export default TillegsInfo;
