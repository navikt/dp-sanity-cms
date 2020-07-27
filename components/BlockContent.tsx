import * as React from 'react';
import { ReactNode } from 'react';
import SanityBlockContent from '@sanity/block-content-to-react';
import { GtilNOKPeview } from './GtilNOKPreview';
import FremhevetTekst from './FremhevetTekst';
import withErrorBoundary from './withErrorBoundary';
import CustomComponentPreview from './CustomComponentPreview';
import TillegsInfo from './TillegsInfo';
import { InlineUtkast } from './Utkast';
import VideoPreview from './VideoPreview';
import { InlineVisForPreview } from './VisForPreview';

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
    customComponent: (props) => <CustomComponentPreview name={props.node.komponent} />,
    tileggsInformasjon: (props) => <TillegsInfo title={props.node.title} blocks={props.node.innhold} />,
    video: (props) => <VideoPreview name={props.node.title} url={props.node.url} />,
  },
  marks: {
    GtilNOK: (props) => <GtilNOKPeview {...props} grunnbelløp={props.children.join('')} />,
    utkast: InlineUtkast,
    visForAnnotationDeltTekst: (props) => (
      <InlineVisForPreview visPaaSider={props.mark.visPaaSider} visFor={props.mark.visFor} {...props} />
    ),
  },
};

function BlockContent(props: { blocks: any }) {
  return <SanityBlockContent blocks={props.blocks} serializers={serializers} />;
}

export default withErrorBoundary(BlockContent);
