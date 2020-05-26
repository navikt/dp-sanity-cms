import * as React from 'react';
import BlockContentPreview from './BlockContentPreview';

export const FremhevetTekstIkon = () => <>❤️</>;

const FremhevetTekst = (props) => (
  <BlockContentPreview
    label={
      <>
        <FremhevetTekstIkon /> Fremhevet tekst
      </>
    }
    color="lightblue"
    blocks={props.value.innhold}
  />
);

export default FremhevetTekst;
