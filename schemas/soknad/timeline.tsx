import React from "react";
import { MdTimeline } from "react-icons/md/";
import { IconRender, NavIconEditor } from "../../components/nav-icon-editor/NavIconEditor";
import * as NavIcons from "@navikt/ds-icons";
import { Timeline } from "../../components/timeline/Timeline";

export const timeline = {
  type: "object",
  name: "timeline",
  title: "Tidslinje",
  icon: MdTimeline,
  fields: [
    {
      name: "elements",
      title: "Tidslinjelementer",
      type: "array",
      of: [{ type: "timelineElement" }],
    },
  ],
  preview: {
    select: {
      elements: "elements",
    },
    component: Timeline,
  },
};

export const timelineElement = {
  type: "object",
  name: "timelineElement",
  title: "Tidslinjelement",
  fields: [
    {
      type: "navIconPicker",
      name: "iconName",
      title: "Ikon",
    },
    {
      type: "text",
      name: "title",
      title: "Tittel",
      rows: 3,
    },
    {
      type: "array",
      name: "body",
      title: "Brødtekst",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      iconName: "iconName",
    },
    prepare({ title, iconName }: { title: string; iconName: string }) {
      return {
        title: title,
        // @ts-ignore
        media: <IconRender icon={NavIcons[iconName]} />,
      };
    },
  },
};

export const navIconPicker = {
  type: "string",
  name: "navIconPicker",
  title: "Tidslinjeikon",
  inputComponent: NavIconEditor,
};
