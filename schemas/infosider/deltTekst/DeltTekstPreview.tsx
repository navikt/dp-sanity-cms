import * as React from "react";
import BlockContentPreview from "../../../components/BlockContentPreview";
import { MdShare } from "react-icons/md";
import styled from "styled-components";

export const DeltTekstIkon = MdShare;

const StyledBlockContentPreview = styled(BlockContentPreview)`
  .block-content-preview {
    margin: 0.5rem 0;
  }
`;

const DeltTekstPreview = (props) => (
  <StyledBlockContentPreview
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
