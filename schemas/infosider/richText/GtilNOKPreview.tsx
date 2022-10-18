import * as React from "react";
import { FaMoneyBill } from "react-icons/fa";
import InlinePreview from "../../../components/InlinePreview";
import { ReactNode, useEffect, useRef, useState } from "react";

export const GtilNOKIcon = FaMoneyBill;

interface Props {
  children: ReactNode;
}

export const GtilNOKPreview = ({ children }: Props) => {
  const [content, setContent] = useState<undefined | string>(undefined);
  const notNumeric = isNaN(Number(content));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setContent(ref.current?.innerText);
  }, [children]);

  return (
    <InlinePreview ref={ref} color={notNumeric ? "red" : "limegreen"} label={notNumeric ? "Ikke et tall!" : "G"}>
      {children}
      <GtilNOKIcon style={{ marginLeft: ".3rem" }} />
    </InlinePreview>
  );
};
