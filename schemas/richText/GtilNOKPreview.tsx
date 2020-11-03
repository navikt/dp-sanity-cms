import * as React from 'react';
import Money from 'react-icons/lib/fa/money';
import InlinePreview from '../../components/InlinePreview';
import { ReactNode } from 'react';

export const GtilNOKIcon = Money;

interface Props {
  grunnbelløp: string;
  children: ReactNode;
}

export const GtilNOKPeview = (props: Props) => {
  const notNumeric = isNaN(Number(props.grunnbelløp));

  return (
    <InlinePreview {...props} color={notNumeric ? 'red' : 'limegreen'} label={notNumeric ? 'Ikke et tall!' : 'G'}>
      {props.children}
      <GtilNOKIcon style={{ marginLeft: '.3rem' }} />
    </InlinePreview>
  );
};
