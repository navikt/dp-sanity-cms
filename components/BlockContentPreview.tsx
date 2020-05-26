import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import BlockContent from './BlockContent';

interface Props {
  color: string;
  label: ReactNode;
  blocks: any;
}

const Style = styled.div<{ color: string }>`
  position: relative;
  padding: 0.5rem;
  border: solid ${(props) => props.color} 0.2rem;
`;

const Label = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${(props) => props.color};
  border-bottom-left-radius: 0.5rem;
  padding: 0.4rem 0.8rem;
  font-weight: bold;
  font-size: 0.8rem;
`;

function BlockContentPreview(props: Props) {
  return (
    <Style color={props.color}>
      <Label color={props.color}>{props.label}</Label>
      <BlockContent blocks={props.blocks} />
    </Style>
  );
}

export default BlockContentPreview;
