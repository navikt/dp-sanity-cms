import * as React from "react";
import styled from "styled-components";
import { headerMixin } from "../richText/HeaderPreviews";
import BlockContentPreview from "../../../components/BlockContentPreview";
import { MdTimeline } from "react-icons/md/";

export const TidslinjeIkon = MdTimeline;

const color = "burlywood";

interface Props {
  blocks: any;
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
  <BlockContentPreview
    label={
      <>
        <TidslinjeIkon /> Tidslinje
      </>
    }
    color={color}
    blocks={props.blocks}
  />
);

export default TidslinjePreview;
