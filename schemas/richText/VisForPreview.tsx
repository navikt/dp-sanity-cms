import * as React from 'react';
import { ReactNode } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import InlinePreview from '../../components/InlinePreview';

export const InlineVisForIkon = FaLightbulb;
const visForColor = '#80f8';
const skjulForColor = '#f048';

type VisFor = {
  skjulFor?: boolean;
  situasjoner?: string[];
};

function getVisForLabel(visFor: VisFor): string {
  if (!visFor?.situasjoner?.length) {
    return 'Ingen situasjoner valgt';
  }

  return (visFor.skjulFor ? 'Skjules for ' : 'Vises for ') + visFor.situasjoner.join(' & ');
}

//Skal slettes når vi har migrert fra gammel til ny situasjonsvelger
function brukerGammelSituasjonsVelger(visFor: VisFor): boolean {
  if (!visFor) {
    return false;
  }

  const visForSituasjoner = Object.keys(visFor)
    .filter((key) => visFor[key] === true)
    .filter((key) => key !== 'skjulFor');

  return !!visForSituasjoner.length;
}

interface Props {
  visPaaSider: any[];
  visFor: VisFor;
  children: ReactNode;
}

export function InlineVisForPreview(props: Props) {
  const visForSide = props.visPaaSider?.length ? 'Vises på utvalgte sider. ' : '';
  const label = getVisForLabel(props.visFor);

  if (brukerGammelSituasjonsVelger(props.visFor)) {
    return (
      <InlinePreview label={'Gammel situasjonsvelger'} color={'red'}>
        {props.children}
      </InlinePreview>
    );
  }

  return (
    <InlinePreview label={visForSide + label} color={props.visFor?.skjulFor ? skjulForColor : visForColor}>
      {props.children}
    </InlinePreview>
  );
}
