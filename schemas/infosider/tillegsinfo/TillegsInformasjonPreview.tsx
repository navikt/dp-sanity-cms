import * as React from "react";
import PortableTextContentPreview from "../../../components/PortableTextContentPreview";
import styled from "styled-components";
import { TypedObject } from "@portabletext/types";

export const TillegsInfoIkon = () => <>‍📎️</>;

const Tittel = styled.p`
  font-weight: bold;
`;

interface Props {
  title: string;
  value: TypedObject | TypedObject[];
}

const TillegsInformasjonPreview = ({ title, value }: Props) => (
  <PortableTextContentPreview
    label={
      <>
        <TillegsInfoIkon /> Tilleggsinfo
      </>
    }
    color="mistyrose"
    before={<Tittel>{title}</Tittel>}
    value={value}
  />
);

export default TillegsInformasjonPreview;
