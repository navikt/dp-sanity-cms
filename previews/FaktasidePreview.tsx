import React from "react";
import { WebPreviewWrapper } from "./PreviewWrapper";
import { getDataset } from "../utils/getDataset";

const FaktasidePreview = (ctx: any) => {
  const slug = ctx.document.displayed?.slug?.current;
  const dataset = getDataset();

  if (!slug) {
    return <div>Faktasiden må ha en slug (url) før den kan forhåndsvises</div>;
  }

  const path = `/${slug}?hemmelig=true&preview=true&dataset=${dataset}`;

  return <WebPreviewWrapper path={path} />;
};

export default FaktasidePreview;
