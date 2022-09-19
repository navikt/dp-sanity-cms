import React, { ReactNode, useEffect, useRef, useState } from "react";
import { MdWeb } from "react-icons/md";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
// @ts-ignore
import styles from "./ProduktsideSectionPreview.module.css";
import InlinePreview from "../../../components/InlinePreview";
import { GtilNOKIcon } from "../../infosider/richText/GtilNOKPreview";

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

interface GtoNOKProps {
  children: ReactNode;
}

export const GtoNOKPreview = (props: GtoNOKProps) => {
  const [content, setContent] = useState<undefined | string>(undefined);
  const notNumeric = isNaN(Number(content));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setContent(ref.current?.innerText);
  }, [props.children]);

  return (
    <InlinePreview ref={ref} color={notNumeric ? "red" : "limegreen"} label={notNumeric ? "Ikke et tall!" : "G"}>
      {props.children}
      <GtilNOKIcon style={{ marginLeft: ".3rem" }} />
    </InlinePreview>
  );
};
