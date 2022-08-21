import React from "react";
import { MdWeb } from "react-icons/md";
import { PortableText } from "@portabletext/react";
// @ts-ignore
import styles from "./InnholdsseksjonPreview.module.css";

export const InnholdsseksjonIkon = MdWeb;

//@ts-ignore
const InnholdsseksjonPreview = (props) => (
  <div className={styles.container}>
    <div className={styles.iconAndTitle}>
      <InnholdsseksjonIkon />
      <h5>{props.value?.title}</h5>
    </div>
    <PortableText value={props.value?.innhold} />
  </div>
);

export default InnholdsseksjonPreview;
