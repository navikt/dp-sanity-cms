import * as React from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';

const Style = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border: 0.1rem solid #aaa;
  p {
    margin: 0;
  }
  p:first-child {
    font-weight: bold;
  }
  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
`;

interface Props {
  title: string;
  description?: string;
  icon: ReactNode;
}

const MediaPreview = (props: Props) => (
  <Style>
    {props.icon}
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  </Style>
);

export default MediaPreview;
