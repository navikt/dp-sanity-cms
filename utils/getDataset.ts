import { studioClient } from "./studioClient";

export function getDataset() {
  return studioClient.config().dataset;
}
