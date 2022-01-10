import React, { forwardRef } from "react";
import styled from "styled-components";
import useSanityQuery from "../../../utils/useSanityQuery";

const Header = styled.div`
  font-size: 1.25rem;
`;

const ErrorStyling = styled(Header)`
  color: red;
`;

const Emoji = styled.span`
  font-size: 1.5em;
`;

type Referrer = {
  title?: { _type: "localeString"; no?: string; en?: string };
  _id: string;
  _type: string;
};
export const HvorErDenIBruk = forwardRef(function HvorErDenIBruk() {
  const documentId = window.location.pathname.split(";").reverse()[0].slice(0, 36);
  const query = `*[references("${documentId}")]`;
  const { data, error } = useSanityQuery<Referrer[]>(query);

  if (error) {
    console.error(error);
    return <ErrorStyling>Det skjedde en feil.</ErrorStyling>;
  }

  if (!data) {
    return <div>Sjekker om den delte teksten er i bruk..</div>;
  }

  if (!data.length) {
    return (
      <Header>
        Denne delte teksten er ikke i bruk <Emoji>😢</Emoji>
      </Header>
    );
  }

  return (
    <div>
      <Header>Denne delte teksten er brukt {data.length} steder:</Header>
      <ul>
        {data.map((refferer) => (
          <Element key={refferer._id} refferer={refferer} />
        ))}
      </ul>
    </div>
  );
});

function Element(props: { refferer: Referrer }) {
  const { refferer } = props;
  const refferenceBaseUrl = window.location.pathname.split("/").slice(0, -1).join("/");

  const isDraft = refferer._id.includes("drafts.");
  const url = `${refferenceBaseUrl}/${refferer._type};${refferer._id.replace("drafts.", "")}`;
  const title = refferer?.title?.no || refferer?.title?.en;

  return (
    <li>
      <a href={url}>
        {title}
        {isDraft && " (draft)"}
      </a>
    </li>
  );
}

export default HvorErDenIBruk;
