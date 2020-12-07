import * as React from 'react';
import { ReactNode } from 'react';
import SanityBlockContent from '@sanity/block-content-to-react';
import { GtilNOKPeview } from '../schemas/richText/GtilNOKPreview';
import FremhevetTekstPreview from '../schemas/fremhevetTekst/FremhevetTekstPreview';
import withErrorBoundary from './withErrorBoundary';
import CustomComponentPreview from '../schemas/richText/CustomComponentPreview';
import TillegsInformasjonPreview from '../schemas/tillegsinfo/TillegsInformasjonPreview';
import { InlineUtkast } from '../schemas/richText/Utkast';
import VideoPreview from '../schemas/video/VideoPreview';
import { InlineVisForPreview } from '../schemas/richText/VisForPreview';
import { H2Header, H3Header, H2NoBackround, H2HeaderMMeny, H4Header } from '../schemas/richText/HeaderPreviews';
import TidslinjePreview, { TidslinjePunkt } from '../schemas/tidslinje/TidslinjePreview';
import { LenkePreview } from '../schemas/richText/annotations/link';

type Serializers = {
  types: {
    [key: string]: ({ node: any }) => ReactNode;
  };
  marks: {
    [key: string]: any;
  };
};

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;

  switch (style) {
    case 'h2':
      return <H2Header {...props} />;
    case 'h2-m-meny':
      return <H2HeaderMMeny {...props} />;
    case 'h2-no-background':
      return <H2NoBackround {...props} />;
    case 'h3':
      return <H3Header {...props} />;
    case 'h4':
      return <H4Header {...props} />;
    case 'tidslinjepunkt':
      return <TidslinjePunkt {...props} />;
    default:
      return SanityBlockContent.defaultSerializers.types.block(props);
  }
};

const serializers: Serializers = {
  types: {
    deltFremhevetTekst: (props) => <FremhevetTekstPreview blocks={props.node.innhold} />,
    customComponent: (props) => <CustomComponentPreview name={props.node.komponent} />,
    tileggsInformasjon: (props) => <TillegsInformasjonPreview title={props.node.title} blocks={props.node.innhold} />,
    video: (props) => <VideoPreview name={props.node.title} url={props.node.url} />,
    block: BlockRenderer,
    tidslinje: (props) => <TidslinjePreview blocks={props.node.innhold} />,
  },
  marks: {
    GtilNOK: (props) => <GtilNOKPeview children={props.children} />,
    utkast: InlineUtkast,
    visForAnnotation: (props) => <InlineVisForPreview visFor={props.mark.visFor} {...props} />,
    visForAnnotationDeltTekst: (props) => (
      <InlineVisForPreview visPaaSider={props.mark.visPaaSider} visFor={props.mark.visFor} {...props} />
    ),
    link: (props) => <LenkePreview {...props.mark} children={props.children} />,
  },
};

function BlockContent(props: { blocks: any }) {
  return <SanityBlockContent blocks={props.blocks || []} serializers={serializers} />;
}

export default withErrorBoundary(BlockContent);
