import { PortableText } from "@portabletext/react";
import React from "react";
import classNames from "classnames";
import { ErrorColored, InformationColored, SuccessColored, WarningColored } from "@navikt/ds-icons";

// @ts-ignore
import styles from "./AlertText.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AlertText(props: any) {
  const { body, title, type } = props.value;

  return (
    <div
      className={classNames(
        styles["alert-text"],
        { [styles["alert-text--info"]]: type === "info" },
        { [styles["alert-text--error"]]: type === "error" },
        { [styles["alert-text--warning"]]: type === "warning" },
        { [styles["alert-text--success"]]: type === "success" }
      )}
    >
      <AlertBoxIcon variant={type} />
      <div>
        {title && <h4>{title}</h4>}
        {body && <PortableText value={body} />}
      </div>
    </div>
  );
}

interface Props {
  variant: "info" | "success" | "warning" | "error";
}

function AlertBoxIcon(props: Props) {
  // eslint-disable-next-line default-case
  switch (props.variant) {
    case "info":
      return <InformationColored />;
    case "success":
      return <SuccessColored />;
    case "warning":
      return <WarningColored />;
    case "error":
      return <ErrorColored />;
    default:
      return <></>;
  }
}
