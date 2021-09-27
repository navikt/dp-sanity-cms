import React from "react";
import { WebPreviewWrapper } from "./PreviewWrapper";
import { getDataset } from "../utils/getDataset";

const KalkulatorPreview = () => {
  const dataset = getDataset();
  const previewUrl = `/dagpenger/kalkulator?preview=true&dataset=${dataset}`;

  return <WebPreviewWrapper path={previewUrl} />;
};

export default KalkulatorPreview;
