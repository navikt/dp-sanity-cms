import React, { useState } from "react";
import { PortableText } from "@portabletext/react";
import { Expand, ExpandFilled } from "@navikt/ds-icons";
import classNames from "classnames";

// @ts-ignore
import styles from "./ReadMore.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ReadMore(props: any) {
  const { body, title, size = "medium", defaultOpen = false } = props.value;
  const [isOpened, setOpened] = useState<boolean>(defaultOpen);

  return (
    <div
      className={classNames(styles["navds-read-more"], {
        [styles["navds-read-more--open"]]: isOpened,
        [styles["navds-read-more--small"]]: size === "small",
      })}
    >
      <button
        className={classNames(styles["navds-read-more__button"], styles["navds-body-short"], {
          [styles["navds-body-short--small"]]: size === "small",
        })}
        type="button"
        onClick={() => setOpened(!isOpened)}
        aria-expanded={isOpened}
      >
        <Expand className={classNames([styles["navds-read-more__expand-icon"]])} aria-hidden />
        <ExpandFilled
          className={classNames(styles["navds-read-more__expand-icon"], styles["navds-read-more__expand-icon--filled"])}
          aria-hidden
        />
        <span>{title}</span>
      </button>
      {isOpened && (
        <div className={classNames([styles["navds-read-more__content"]])}>
          <PortableText value={body} />
        </div>
      )}
    </div>
  );
}
