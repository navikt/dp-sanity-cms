import * as React from 'react';
import Icon from 'react-icons/lib/md/timeline';
import styled from 'styled-components';
import { headerMixin } from '../../components/styledComponents';
import BlockContentPreview from '../../components/BlockContentPreview';

export const TidslinjeIkon = Icon;

const color = 'burlywood';

interface Props {
  blocks: any;
}

export const TidslinjePunkt = styled.div`
  font-size: 1.5rem;
  ${headerMixin('Punkt')}
  &::before {
    content: '';
    display: inline-block;
    width: 0.7em;
    height: 0.7em;
    margin-right: 0.6em;
    transform: translateY(0.1em);
    border-radius: 50%;
    border: 0.2rem ${color} solid;
  }
`;

const TidslinjePreview = (props: Props) => (
  <BlockContentPreview
    label={
      <>
        <TidslinjeIkon /> Tidslinje
      </>
    }
    color={color}
    blocks={props.blocks}
  />
);

export default TidslinjePreview;
