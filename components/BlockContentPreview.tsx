import * as React from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import BlockContent from "./BlockContent";

interface Props {
  color: string;
  label: ReactNode;
  before?: ReactNode;
  blocks: any;
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

function BlockContentPreview(props: Props) {
  return (
    <Style color={props.color} className={`${props.className} block-content-preview`}>
      <Label color={props.color}>{props.label}</Label>
      {props.before}
      <BlockContent blocks={props.blocks} />
    </Style>
  );
}

export default BlockContentPreview;
