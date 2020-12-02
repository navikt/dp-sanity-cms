import { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';

function useSanityQuery<Data>(query: string) {
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    const dataset = window.location.pathname.split('/')[1];
    const client = sanityClient({
      projectId: 'rt6o382n',
      dataset: dataset,
    });
    client.fetch(query).then(setData);
  }, []);

  return data;
}

export default useSanityQuery;
