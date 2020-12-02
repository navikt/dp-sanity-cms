import * as React from 'react';
import sanityClient from '@sanity/client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSanityQuery from '../../utils/useSanityQuery';

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
  const documentId = window.location.pathname.split(';').pop();
  const query = `*[references("${documentId}")]`;
  const gydldigId = documentId?.length === 36;
  const data = useSanityQuery<Referrer[]>(query);

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
        {data.map((ref) => (
          <li>
            <a href={`${referenceBaseUrl}/${ref._type};${ref._id}`}>{ref?.title.no}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HvorErDenIBruk;
