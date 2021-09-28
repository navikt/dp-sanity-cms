import * as React from "react";
import { ReactNode } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import { GtilNOKPeview } from "../schemas/infosider/richText/GtilNOKPreview";
import FremhevetTekstPreview from "../schemas/infosider/fremhevetTekst/FremhevetTekstPreview";
import withErrorBoundary from "./withErrorBoundary";
import CustomComponentPreview from "../schemas/infosider/richText/CustomComponentPreview";
import TillegsInformasjonPreview from "../schemas/infosider/tillegsinfo/TillegsInformasjonPreview";
import { InlineUtkast } from "../schemas/infosider/richText/Utkast";
import VideoPreview from "../schemas/video/VideoPreview";
import { InlineVisForPreview } from "../schemas/infosider/richText/VisForPreview";
import {
  H2Header,
  H3Header,
  H2NoBackround,
  H2HeaderMMeny,
  H4Header,
} from "../schemas/infosider/richText/HeaderPreviews";
import TidslinjePreview, { TidslinjePunkt } from "../schemas/infosider/tidslinje/TidslinjePreview";
import { LenkePreview } from "../schemas/infosider/richText/annotations/link";

type Serializers = {
  types: {
    [key: string]: ({ node: any }) => ReactNode;
  };
  marks: {
    [key: string]: any;
  };
};

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;

  switch (style) {
    case "h2":
      return <H2Header {...props} />;
    case "h2-m-meny":
      return <H2HeaderMMeny {...props} />;
    case "h2-no-background":
      return <H2NoBackround {...props} />;
    case "h3":
      return <H3Header {...props} />;
    case "h4":
      return <H4Header {...props} />;
    case "tidslinjepunkt":
      return <TidslinjePunkt {...props} />;
    default:
      return SanityBlockContent.defaultSerializers.types.block(props);
  }
};

const serializers: Serializers = {
  types: {
    fremhevetTekst: (props) => <FremhevetTekstPreview blocks={props.node.innhold} />,
    customComponent: (props) => <CustomComponentPreview name={props.node.komponent} />,
    tileggsInformasjon: (props) => <TillegsInformasjonPreview title={props.node.title} blocks={props.node.innhold} />,
    video: (props) => <VideoPreview name={props.node.title} url={props.node.url} />,
    block: BlockRenderer,
    tidslinje: (props) => <TidslinjePreview blocks={props.node.innhold} />,
  },
  marks: {
    GtilNOK: (props) => <GtilNOKPeview> {props.children}</GtilNOKPeview>,
    utkast: InlineUtkast,
    visForAnnotation: (props) => <InlineVisForPreview {...props.mark}>{props.children}</InlineVisForPreview>,
    link: (props) => <LenkePreview {...props.mark}>{props.children}</LenkePreview>,
  },
};

function BlockContent(props: { blocks: any }) {
  return <SanityBlockContent blocks={props.blocks || []} serializers={serializers} />;
}

export default withErrorBoundary(BlockContent);
