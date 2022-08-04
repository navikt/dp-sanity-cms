import React from "react";
import * as NavIcons from "@navikt/ds-icons";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
// @ts-ignore
import styles from "./Timeline.css";

export interface TimelineItemProps {
  title: string;
  iconName: string;
  body: TypedObject | TypedObject[];
}

export function TimelineItem(props: TimelineItemProps) {
  // @ts-ignore
  const Icon = NavIcons[props.iconName];
  return (
    <div key={props.title} className={styles.timelineItem}>
      <div className={styles.iconWrapper}>{Icon && <Icon className={styles.icon} />}</div>
      <div>
        <h5>{props.title}</h5>
        <PortableText value={props.body} />
      </div>
    </div>
  );
}
