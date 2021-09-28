import React from "react";
import link from "./annotations/link";
import { H2Header, H2HeaderMMeny, H2NoBackround, H3Header, H4Header } from "./HeaderPreviews";
import { InlineUtkast, InlineUtkastIkon } from "./Utkast";
import visForAnnotation from "./annotations/visForAnnotation";
import { GtilNOKIcon, GtilNOKPeview } from "./GtilNOKPreview";
import { InlineStrykes, InlineStrykesIkon } from "./Strykes";
import pasChildren from "../../../components/pasChildren";

export const styles = {
  normal: { title: "Normal", value: "normal" },
  h2: { title: "Overskrift", value: "h2", blockEditor: { render: pasChildren(H2Header) } },
  h2_M_Meny: { title: "Overskrift - m/meny", value: "h2-m-meny", blockEditor: { render: pasChildren(H2HeaderMMeny) } },
  h2_no_background: {
    title: "Overskrift - u/bakgrunn",
    value: "h2-no-background",
    blockEditor: { render: pasChildren(H2NoBackround) },
  },
  h3: { title: "Mellomtittel", value: "h3", blockEditor: { render: pasChildren(H3Header) } },
  h4: { title: "Liten mellomtittel", value: "h4", blockEditor: { render: pasChildren(H4Header) } },
};

export const decorators = {
  utkast: {
    title: "Utkast",
    value: "utkast",
    blockEditor: { icon: InlineUtkastIkon, render: pasChildren(InlineUtkast) },
  },
  foreslattStykes: {
    title: "Strykes",
    value: "strykes",
    blockEditor: { icon: InlineStrykesIkon, render: pasChildren(InlineStrykes) },
  },
  GtilNOK: {
    title: "Grunnbelløp til NOK",
    value: "GtilNOK",
    blockEditor: { icon: GtilNOKIcon, render: (props) => <GtilNOKPeview children={props.children} /> },
  },
  strong: { title: "Strong", value: "strong" },
  em: { title: "Emphasis", value: "em" },
};

export const block = {
  title: "Block",
  type: "block",
  styles: [styles.normal, styles.h4, styles.h3, styles.h2, styles.h2_M_Meny, styles.h2_no_background],
  marks: {
    decorators: [decorators.strong, decorators.em, decorators.utkast, decorators.foreslattStykes, decorators.GtilNOK],
    annotations: [link, visForAnnotation],
  },
};

export default {
  title: "Rich Text",
  name: "richText",
  type: "array",
  of: [
    block,
    { type: "customComponent" },
    { type: "fremhevetTekst" },
    { type: "video" },
    { type: "tileggsInformasjon" },
    { type: "deltTekstReference" },
    { type: "tidslinje" },
  ],
};
