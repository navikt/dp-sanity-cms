import React from "react";
import { getDataset } from "./utils/getDataset";
import styled from "styled-components";
import { BsExclamationCircle } from "react-icons/bs";

const Style = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <Style>
      <span>POA cms</span>
      {getBadge()}
    </Style>
  );
};

const BadgeStyle = styled.div<{ bgColor: string }>`
  margin-left: 0.5rem;
  background-color: ${(p) => p.bgColor};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
  text-transform: capitalize;
`;

function getBadge() {
  const dataset = getDataset();
  switch (dataset) {
    case "production":
      return <ProductionBadge />;
    default:
      return <BadgeStyle bgColor="darkslateblue">{dataset}</BadgeStyle>;
  }
}

const ProductionBadge = () => {
  return (
    <BadgeStyle bgColor="darkolivegreen">
      <BsExclamationCircle />
      <span>Produksjon</span>
    </BadgeStyle>
  );
};

export default Logo;
