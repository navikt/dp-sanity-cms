import React, { ReactNode, useEffect, useRef, useState } from "react";
import { produktsideSectionReferenceName } from "./produktsideSectionReference";
import { FaMoneyBill } from "react-icons/fa";

interface Props {
  children: ReactNode;
}

export const GtoNOKPreview = (props: Props) => {
  const [content, setContent] = useState<undefined | string>(undefined);
  const notNumeric = isNaN(Number(content));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setContent(ref.current?.innerText);
  }, [props.children]);

  return (
    <>
      <FaMoneyBill style={{ marginRight: ".1rem", marginLeft: ".2rem" }} />
      <span ref={ref} style={{ color: notNumeric ? "red" : "limegreen" }}>
        {props.children}
      </span>
      <span style={{ color: notNumeric ? "red" : "limegreen", marginLeft: ".1rem" }}>
        {notNumeric ? "Ikke ett tall!" : "G"}
      </span>
    </>
  );
};

export const produktsideSectionRichText = {
  title: "Innholdsseksjon Rich Text",
  name: "produktsideSectionRichText",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Grunnbeløp til NOK",
            value: "GtoNOK",
            // eslint-disable-next-line
            // @ts-ignore
            blockEditor: { icon: FaMoneyBill, render: (props) => <GtoNOKPreview>{props.children}</GtoNOKPreview> },
          },
        ],
      },
    },
    { type: "customComponent" },
    { type: produktsideSectionReferenceName },
  ],
};
