import * as React from "react";
import PortableTextContentPreview from "../../../components/PortableTextContentPreview";
import { MdShare } from "react-icons/md";
import styled from "styled-components";

export const DeltTekstIkon = MdShare;

const StyledPortableTextContentPreview = styled(PortableTextContentPreview)`
  .block-content-preview {
    margin: 0.5rem 0;
  }
`;

const DeltTekstPreview = (props) => (
  <StyledPortableTextContentPreview
    label={
      <>
        <DeltTekstIkon /> Delt tekst: {props.value?.title}
      </>
    }
    color="gold"
    value={props.value?.innhold?.no}
  />
);

export default DeltTekstPreview;
