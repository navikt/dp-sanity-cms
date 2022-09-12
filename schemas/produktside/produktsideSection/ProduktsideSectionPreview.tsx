import React from "react";
import { MdWeb } from "react-icons/md";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
// @ts-ignore
import styles from "./ProduktsideSectionPreview.module.css";

export const ProduktsideSectionIcon = MdWeb;

interface Props {
  value: {
    title: string;
    content: TypedObject | TypedObject[];
  };
}

export function ProduktsideSectionPreview(props: Props) {
  if (!props.value) {
    return null;
  }

  const { title, content } = props.value;

  return (
    <div className={styles.container}>
      <div className={styles.iconAndTitle}>
        <ProduktsideSectionIcon />
        <h5>{title}</h5>
      </div>
      <PortableText value={content} />
    </div>
  );
}
