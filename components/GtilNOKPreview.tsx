import * as React from 'react';
import Money from 'react-icons/lib/fa/money';
import InlinePreview from './InlinePreview';

export const GtilNOKIcon = Money;

interface Props {
  children: string[];
}

export const GtilNOKPeview = (props: Props) => {
  const notNumeric = isNaN(Number(props.children));
  return (
    <InlinePreview color={notNumeric ? 'red' : 'limegreen'} label={notNumeric ? 'Ikke et tall!' : 'G'}>
      {props.children}
      <GtilNOKIcon style={{ marginLeft: '.3rem' }} />
    </InlinePreview>
  );
};
