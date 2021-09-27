import styled from "styled-components";
import React from "react";

const Style = styled.div`
  background-color: white;
  height: calc(100% - 2rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  &,
  &:visited {
    color: #0067c5;
  }
`;

const StyledIframe = styled.iframe`
  margin-top: 0.5rem;
  width: 100%;
  box-shadow: 0 0 1rem #888;
  flex-grow: 1;
`;

export function WebPreviewWrapper(props: { path: string }) {
  const url =
    process.env.NODE_ENV === "production"
      ? `https://www.nav.no/arbeid${props.path}`
      : `http://localhost:3000/arbeid${props.path}`;

  return (
    <Style>
      <Link href={url} target="_blank">
        Åpne i egen fane
      </Link>
      <StyledIframe src={url} frameBorder={0} />
    </Style>
  );
}
