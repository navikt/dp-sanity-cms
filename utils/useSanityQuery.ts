import { useEffect, useRef, useState } from "react";
import { studioClient } from "./studioClient";

function useSanityQuery<Data>(query: string) {
  const isMounted = useRef(false);
  const [data, setData] = useState<Data | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    isMounted.current = true;
    studioClient
      .fetch(query)
      .then((result) => {
        if (isMounted.current) {
          setData(result);
        }
      })
      .catch(setError);

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { data, error };
}

export default useSanityQuery;
