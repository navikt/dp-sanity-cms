import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { produktsideSectionReferenceName } from "./produktsideSectionReference";
import { GtoNOKPreview } from "./GtoNOKPreview";

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
