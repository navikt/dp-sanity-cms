import { MdTimeline } from "react-icons/md/";
import { TimelinePreview } from "./TimelinePreview";
import NavSvgIcons from "../../nav-svg-icons";

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
    component: TimelinePreview,
  },
};

export const timelineElement = {
  type: "object",
  name: "timelineElement",
  title: "Tidslinjelement",
  fields: [
    {
      type: "navIconPicker",
      name: "icon",
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
    },
  },
};

export const navIconPicker = {
  type: "image",
  name: "navIconPicker",
  title: "Tidslinjeikon",
  options: { sources: [NavSvgIcons] },
};
