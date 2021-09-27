import { studioClient } from "./studioClient";
import useSWR from "swr";

const fetcher = async (query: string) => await studioClient.fetch(query);

const query = `*[_type == "faktaSide"] {
  _id,
  title,
  "slug": slug.current
}`;

interface Faktaside {
  _id: string;
  title: {
    no?: string;
    en?: string;
  };
  slug: string;
}

export function useFaktasider() {
  return useSWR<Faktaside[]>(query, fetcher);
}
