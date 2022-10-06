import { useClient } from "sanity";

import imageUrlBuilder from "@sanity/image-url";

export const studioClient = useClient().withConfig({ apiVersion: "2021-07-30" });

const builder = imageUrlBuilder(studioClient);

export function urlFor(source) {
  return builder.image(source);
}
