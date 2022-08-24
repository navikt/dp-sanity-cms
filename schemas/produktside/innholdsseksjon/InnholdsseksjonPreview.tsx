import React from "react";
import { MdWeb } from "react-icons/md";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
// @ts-ignore
import styles from "./InnholdsseksjonPreview.module.css";

export const InnholdsseksjonIkon = MdWeb;

interface Props {
  value: {
    title: string;
    innhold: TypedObject | TypedObject[];
  };
}

export function InnholdsseksjonPreview({ value: { title, innhold } }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.iconAndTitle}>
        <InnholdsseksjonIkon />
        <h5>{title}</h5>
      </div>
      <PortableText value={innhold} />
    </div>
  );
}
