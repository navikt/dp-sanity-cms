import * as React from 'react';
import BlockContentPreview from '../../components/BlockContentPreview';

export const FremhevetTekstIkon = () => <>❤️</>;

const FremhevetTekstPreview = (props: { blocks }) => (
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

export default FremhevetTekstPreview;
