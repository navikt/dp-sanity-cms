import * as React from 'react';
import LightBulb from 'react-icons/lib/fa/lightbulb-o';
import InlinePreview from './InlinePreview';
import { filtreringsValg } from '../schemas/utils/filtreringsValg';

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
  return visForSituasjoner.length ? 'Vises for ' + visForSituasjoner.join(' & ') : '';
}

export function InlineVisForPreview(props) {
  const visForSide = props.visPaaSide?.length ? 'Vises på utvalgte sider. ' : '';
  const label = getVisForLabel(props.visFor);
  return (
    <InlinePreview label={visForSide + label} color={color}>
      {props.children}
    </InlinePreview>
  );
}
