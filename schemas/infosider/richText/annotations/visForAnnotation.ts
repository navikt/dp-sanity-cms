import { InlineVisForPreview, InlineVisForIkon } from "../VisForPreview";
import ConditionalField from "../../../../components/ConditionalField";

export default {
  name: "visForAnnotation",
  type: "object",
  title: "Vis for",
  blockEditor: {
    icon: InlineVisForIkon,
    render: InlineVisForPreview,
  },
  fields: [
    {
      name: "visFor",
      type: "visFor",
      title: "Vis for:",
      description:
        "Her kan du velge hvilke situasjoner denne teksten skal vises for. Bruker vil få mulighet til å filtrere på situasjoner i frontend, og tekster som ikke matcher valget bruker gjør vil bli skjult.",
    },
    {
      name: "visPaaSider",
      title: "Vis på side:",
      description:
        "Her kan du tilpasse den delte teksten for bruk på forskjellige faktasider ved å velge hvilke faktasider den markerte teksten skal vises på. Dersom du ikke velger noen sider vil teksten vises for alle sider der den brukes.",
      type: "array",
      of: [
        {
          type: "reference",
          description: 'Faktasiden må være "Published" for å dukke opp i denne lista',
          to: { type: "faktaSide" },
        },
      ],
      inputComponent: ConditionalField,
      options: {
        condition: (document) => document._type === "deltTekst",
      },
    },
  ],
};
