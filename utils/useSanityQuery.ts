import { useEffect, useState } from "react";
import { studioClient } from "./studioClient";

function useSanityQuery<Data>(query: string) {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    studioClient.fetch(query).then(setData).catch(setError);
  }, []);

  return { data, error };
}

export default useSanityQuery;
