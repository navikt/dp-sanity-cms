import React from "react";
import { MdWeb } from "react-icons/md";
import { TypedObject } from "@portabletext/types";
// @ts-ignore
import styles from "./InnholdsseksjonPreview.module.css";
import BlockContentPreview from "../../../components/BlockContentPreview";

export const InnholdsseksjonIkon = MdWeb;

interface Props {
  value: {
    title: string;
    innhold: TypedObject | TypedObject[];
  };
}

export function InnholdsseksjonPreview(props: Props) {
  if (!props.value) {
    return null;
  }

  const { title, innhold } = props.value;

  return (
    <div className={styles.container}>
      <div className={styles.iconAndTitle}>
        <InnholdsseksjonIkon />
        <h5>{title}</h5>
      </div>
      <BlockContentPreview blocks={innhold} color={"lightblue"} label={"Innholdsseksjon"} />
    </div>
  );
}
