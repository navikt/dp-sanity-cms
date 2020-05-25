import * as React from 'react';
import SanityBlockContent from '@sanity/block-content-to-react';
import { H2Header } from './styledComponents';

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;

  switch (style) {
    case 'h2':
      return <H2Header>{props.node.children[0].text}</H2Header>;
    default:
      return SanityBlockContent.defaultSerializers.types.block(props);
  }
};

const serializers = {
  types: {
    block: BlockRenderer,
    GtilNOK: (props) => props.node.G,
  },
};

function BlockContent(props: { blocks: any }) {
  return <SanityBlockContent serializers={serializers} blocks={props.blocks} />;
}

export default BlockContent;
