import * as React from 'react';
import BlockContentPreview from './BlockContentPreview';

export const FremhevetTekstIkon = () => <>❤️</>;

const FremhevetTekst = (props: { blocks }) => (
  <BlockContentPreview
    label={
      <>
        <FremhevetTekstIkon /> Fremhevet tekst
      </>
    }
    color="lightblue"
    blocks={props.blocks}
  />
);

export default FremhevetTekst;
