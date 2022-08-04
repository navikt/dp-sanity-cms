import React from "react";
import { PortableTextComponentProps } from "@portabletext/react/src/types";
import { TimelineItem, TimelineItemProps } from "./TimelineItem";

export function Timeline(props: PortableTextComponentProps<{ elements: TimelineItemProps[] }>) {
  return <>{props.value.elements.map(TimelineItem)}</>;
}
