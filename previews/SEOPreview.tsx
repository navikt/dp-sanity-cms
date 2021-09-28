import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { studioClient, urlFor } from "../utils/studioClient";

const Style = styled.div`
  margin: 1rem;
  box-shadow: 0 0 1rem #888;
  display: flex;
  width: 40rem;
  background-color: white;
  > * {
    border: 1px solid #bbb;
  }
  img {
    width: 10rem;
    object-fit: contain;
  }
`;

const Content = styled.div`
  padding: 1rem;
  p {
    margin: 0.25rem 0;
  }
  p:nth-child(1) {
    opacity: 0.7;
  }
  p:nth-child(2) {
    font-weight: bold;
  }
  p:nth-child(3) {
    opacity: 0.85;
  }
`;

const SEOPreview = (props: { title: string; description: string }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    studioClient.fetch(`*[_type == 'oppsett'][0].seoImage`).then(setImage);
  }, []);

  return (
    <Style>
      <img src={(image && urlFor(image).url()) || ""} />
      <Content>
        <p>NAV.NO</p>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </Content>
    </Style>
  );
};

export default SEOPreview;
