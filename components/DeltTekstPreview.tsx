import * as React from 'react';
import BlockContentPreview from './BlockContentPreview';
import Icon from 'react-icons/lib/md/share';

export const DeltTekstIkon = Icon;

const DeltTekstPreview = (props) => (
  <BlockContentPreview
    label={
      <>
        <DeltTekstIkon /> Delt tekst: {props.value?.title}
      </>
    }
    color="gold"
    blocks={props.value?.innhold?.no}
  />
);

export default DeltTekstPreview;
