import * as React from 'react';
import { ReactNode } from 'react';
import SanityBlockContent from '@sanity/block-content-to-react';
import { GtilNOKPeview } from './GtilNOKPreview';
import FremhevetTekst from './FremhevetTekst';

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
    deltFremhevetTekst: (props) => <FremhevetTekst blocks={props.node.innhold} />,
  },
  marks: {
    GtilNOK: (props) => <GtilNOKPeview {...props} grunnbelløp={props.children.join('')} />,
  },
};

function BlockContent(props: { blocks: any }) {
  return <SanityBlockContent blocks={props.blocks} serializers={serializers} />;
}

export default BlockContent;
