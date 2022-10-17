import * as React from "react";
import { PortableText, PortableTextReactComponents, PortableTextProps } from "@portabletext/react";
import {
  ArbitraryTypedObject,
  PortableTextBlock,
  PortableTextMarkDefinition,
  PortableTextSpan,
  TypedObject,
} from "@portabletext/types";
import { GtilNOKPreview } from "../schemas/infosider/richText/GtilNOKPreview";
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

const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: (props) => <H2Header {...props} />,
    "h2-m-meny": (props) => <H2HeaderMMeny {...props} />,
    "h2-no-background": (props) => <H2NoBackround {...props} />,
    h3: (props) => <H3Header {...props} />,
    h4: (props) => <H4Header {...props} />,
    tidslinjepunkt: (props) => <TidslinjePunkt {...props} />,
  },
  types: {
    fremhevetTekst: ({ value }) => <FremhevetTekstPreview value={value.innhold} />,
    customComponent: ({ value }) => <CustomComponentPreview name={value.komponent} />,
    tileggsInformasjon: ({ value }) => <TillegsInformasjonPreview title={value.title} value={value.innhold} />,
    video: ({ value }) => <VideoPreview name={value.title} url={value.url} />,
    tidslinje: ({ value }) => <TidslinjePreview value={value.innhold} />,
  },
  marks: {
    GtilNOK: ({ children }) => <GtilNOKPreview> {children}</GtilNOKPreview>,
    utkast: InlineUtkast,
    visForAnnotation: ({ value, children }) => <InlineVisForPreview {...value}>{children}</InlineVisForPreview>,
    link: ({ value, children }) => <LenkePreview {...value}>{children}</LenkePreview>,
  },
};

function PortableTextContent<
  B extends TypedObject = PortableTextBlock<
    PortableTextMarkDefinition,
    ArbitraryTypedObject | PortableTextSpan,
    string,
    string
  >
>({ value }: PortableTextProps<B>) {
  return <PortableText value={value || []} components={components} />;
}

export default withErrorBoundary(PortableTextContent);
