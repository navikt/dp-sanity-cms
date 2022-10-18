import { TypedObject } from "@portabletext/types";
import * as React from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import PortableTextContent from "./PortableTextContent";

interface Props {
  color: string;
  label: ReactNode;
  before?: ReactNode;
  value: TypedObject | TypedObject[];
  className?: string;
}

const Style = styled.div<{ color: string }>`
  position: relative;
  padding: 1.5rem 0.5rem 0.5rem;
  border: solid ${(props) => props.color} 0.2rem;
`;

const Label = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.color};
  border-bottom-right-radius: 0.5rem;
  padding: 0.4rem 0.8rem;
  font-weight: bold;
  font-size: 0.8rem;
`;

function PortableTextContentPreview(props: Props) {
  return (
    <Style color={props.color} className={`${props.className} block-content-preview`}>
      <Label color={props.color}>{props.label}</Label>
      {props.before}
      <PortableTextContent value={props.value} />
    </Style>
  );
}

export default PortableTextContentPreview;
