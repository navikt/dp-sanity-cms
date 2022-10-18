import * as React from "react";
import styled from "styled-components";
import { headerMixin } from "../richText/HeaderPreviews";
import PortableTextContentPreview from "../../../components/PortableTextContentPreview";
import { MdTimeline } from "react-icons/md/";
import { TypedObject } from "@portabletext/types";

export const TidslinjeIkon = MdTimeline;

const color = "burlywood";

interface Props {
  value: TypedObject | TypedObject[];
}

export const TidslinjePunkt = styled.div`
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  ${headerMixin("Punkt")}
  &::before {
    content: "";
    display: inline-block;
    width: 0.7em;
    height: 0.7em;
    margin-right: 0.6em;
    transform: translateY(0.1em);
    border-radius: 50%;
    border: 0.2rem ${color} solid;
  }
`;

const TidslinjePreview = (props: Props) => (
  <PortableTextContentPreview
    label={
      <>
        <TidslinjeIkon /> Tidslinje
      </>
    }
    color={color}
    value={props.value}
  />
);

export default TidslinjePreview;
