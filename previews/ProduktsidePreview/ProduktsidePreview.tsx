import React from "react";
import { getDataset } from "../../utils/getDataset";
// @ts-ignore
import styles from "./ProduktsidePreview.module.css";

export function ProduktsidePreview() {
  const dataset = getDataset();
  const path = `?preview=true&dataset=${dataset}`;

  const url =
    dataset === "production"
      ? `https://arbeid.ekstern.dev.nav.no/dagpenger${path}`
      : `https://arbeid.dev.nav.no/dagpenger${path}`;

  return (
    <div className={styles.container}>
      <a href={url} target="_blank" rel="noreferrer">
        Åpne i egen fane
      </a>
      <iframe src={url} title={"Preview Produktside"} />
    </div>
  );
}
