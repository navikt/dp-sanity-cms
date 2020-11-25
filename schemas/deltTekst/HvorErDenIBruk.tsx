import * as React from 'react';
import sanityClient from '@sanity/client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ErrorStyling = styled.div`
  color: red;
`;

const Header = styled.div`
  font-size: 1.25rem;
`;

const Emoji = styled.span`
  font-size: 1.5em;
`;

type Referrer = {
  title?: { _type: 'localeString'; no: string };
  _id: string;
  _type: string;
};

function HvorErDenIBruk(props: any) {
  const [data, setData] = useState<Referrer[] | undefined>(undefined);

  const documentId = window.location.pathname.split(';').pop();
  const query = `*[references("${documentId}")]`;
  const gydldigId = documentId.length === 36;

  useEffect(() => {
    const dataset = window.location.pathname.split('/')[1];
    const client = sanityClient({
      projectId: 'rt6o382n',
      dataset: dataset,
    });
    client.fetch(query).then(setData);
  }, []);

  if (!data?.length) {
    return (
      <Header {...props}>
        {!gydldigId ? (
          <ErrorStyling>Dette ser ut som en ugyldig dokumentID: {documentId}</ErrorStyling>
        ) : (
          <>
            Denne delte teksten er ikke i bruk <Emoji>😢</Emoji>
          </>
        )}
      </Header>
    );
  }

  const referenceBaseUrl = window.location.pathname.split('/').slice(0, -1).join('/');

  return (
    <div {...props}>
      <Header>Denne delte teksten er brukt {data.length} steder:</Header>
      <ul>
        {data.map((refferer) => (
          <li>
            <a href={`${referenceBaseUrl}/${refferer._type};${refferer._id}`}>{refferer?.title.no}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HvorErDenIBruk;
