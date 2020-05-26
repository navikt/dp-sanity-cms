import * as React from 'react';
import LightBulb from 'react-icons/lib/fa/lightbulb-o';
import InlinePreview from './InlinePreview';
import { filtreringsValg } from '../schemas/utils/filtreringsValg';
import styled from 'styled-components';
import BlockContentPreview from './BlockContentPreview';

export const InlineVisForIkon = LightBulb;
const color = '#80f8';

function getVisForLabel(visFor): string {
  if (!visFor) {
    return '';
  }
  const visForSituasjoner = Object.entries(visFor)
    .filter((it) => filtreringsValg.includes(it[0]))
    .filter((it) => it[1])
    .map((it) => it[0]);
  return 'Vis for ' + visForSituasjoner.join(' & ');
}

export function InlineVisForPreview(props) {
  const label = getVisForLabel(props.visFor);
  return (
    <InlinePreview label={label} color={color}>
      {props.children}
    </InlinePreview>
  );
}

const VisForIkonStyle = styled.span`
  border: 0.1rem black solid;
  border-radius: 0.2rem;
`;

export const VisForIkon = () => (
  <VisForIkonStyle>
    <InlineVisForIkon />
  </VisForIkonStyle>
);

export const VisForPreview = (props) => {
  const label = getVisForLabel(props.value.visFor);

  return (
    <BlockContentPreview
      color={color}
      label={
        <>
          <VisForIkon /> {label}
        </>
      }
      blocks={props.value.innhold}
    />
  );
};
