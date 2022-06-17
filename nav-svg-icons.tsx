import React from "react";
import { ImageIcon } from "@sanity/icons";
import * as AllIcons from "@navikt/ds-icons";

export default {
  name: "nav-svg-icons", // Unique source name
  title: "Ikon velger", // Title displayed in lists, buttons etc
  component: NavSvgIconSelector, // Selection component
  icon: ImageIcon, // Icon for lists, buttons etc.
};

function NavSvgIconSelector() {
  const allIcons = Object.values(AllIcons);

  return (
    <div>
      {allIcons.map((icon, index) => (
        <IconRender iconName={icon} />
      ))}
    </div>
  );
}

function IconRender(props: { iconName: unknown }) {
  const Icon = props.iconName;
  // @ts-ignore
  return <Icon />;
}
