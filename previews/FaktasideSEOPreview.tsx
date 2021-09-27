import React from "react";
import SEOPreview from "./SEOPreview";

const FaktasideSEOPreview = (ctx: any) => {
  const { beskrivelse, title } = ctx.document.displayed;

  return <SEOPreview title={title.no} description={beskrivelse.no} />;
};

export default FaktasideSEOPreview;
