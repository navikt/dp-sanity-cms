import React from "react";
import { GtoNOKPreview } from "./GtoNOKPreview";
import { FaMoneyBill } from "react-icons/fa";

export const GtoNOKDecorator = {
  title: "Grunnbeløp til NOK",
  value: "GtoNOK",
  // eslint-disable-next-line
  // @ts-ignore
  blockEditor: { icon: FaMoneyBill, render: ({ children }) => <GtoNOKPreview>{children}</GtoNOKPreview> },
};
