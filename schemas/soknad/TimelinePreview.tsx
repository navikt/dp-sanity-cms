import React from "react";
import { PortableText } from "@portabletext/react";
import { Applicant } from "@navikt/ds-icons";
import styles from "./TimelinePreview.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TimelinePreview(props: any) {
  const timelineElements = props.value.elements;

  return (
    <div>
      {/*<pre>{JSON.stringify(timelineElements, null, 2)}</pre>*/}
      {timelineElements.map((element) => (
        <div key={element._key} className={styles["timeline-element"]}>
          <div className={styles["timeline-visual-indication"]}>
            <Applicant />
            {/*{element.icon}*/}
            <div className={styles["timeline-vertical-line"]} />
          </div>
          <div>
            <div className={styles.label}>{element.title}</div>
            <PortableText value={element.body} />
          </div>
        </div>
      ))}
    </div>
  );
  // return <pre>{JSON.stringify(timelineElements, null, 2)}</pre>;
}
