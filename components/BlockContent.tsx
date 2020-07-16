import * as React from 'react';
import { ReactNode } from 'react';
import SanityBlockContent from '@sanity/block-content-to-react';
import { GtilNOKPeview } from '../schemas/objects/GtoNOK';
type Serializers = {
  types: {
    [key: string]: ({ node: any }) => ReactNode;
  };
  marks: {
    [key: string]: any;
  };
};

const serializers: Serializers = {
  types: {
    GtilNOK: (props) => <GtilNOKPeview G={props.node.G} />,
  },
  marks: {},
};

function BlockContent(props: { blocks: any }) {
  return <SanityBlockContent blocks={props.blocks} serializers={serializers} />;
}

export default BlockContent;
