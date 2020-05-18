import * as React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const Style = styled.div`
  position: relative;
  padding: 1rem;
  border: solid #8888 0.2rem;
`;

const Label = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: #ff88;
  padding: 0.3rem;
`;

const WrapWithCustomComponentPreview = (props) => {
  return (
    <Style>
      <Label>Wrap with: "{props.value.component}"</Label>
      <BlockContent blocks={props.value.tekst} />
    </Style>
  );
};

export default WrapWithCustomComponentPreview;
