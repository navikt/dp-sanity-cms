import React from "react";
import { WebPreviewWrapper } from "./PreviewWrapper";
import { getDataset } from "../utils/getDataset";

const ForsidePreview = () => {
  const dataset = getDataset();
  const previewUrl = `?preview=true&dataset=${dataset}`;

  return <WebPreviewWrapper path={previewUrl} />;
};

export default ForsidePreview;
