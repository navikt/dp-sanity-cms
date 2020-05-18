import * as React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const Style = styled.div`
  position: relative;
  padding: 1rem;
  border: solid #8888 0.2rem;
`;

const FremhevetTekst = (props) => {
  return (
    <Style>
      <BlockContent blocks={props.value.innhold} />
    </Style>
  );
};

export default FremhevetTekst;
