import VelgSituasjoner from "./VelgSituasjoner";
import VelgSituasjonerRef from "./VelgSituasjonerRef";

export default {
  name: "visFor",
  title: "Vis for",
  type: "object",
  fields: [
    {
      type: "boolean",
      name: "skjulFor",
      title: "Ovmendt filtrering",
      description:
        'Skru på denne for å skjule teksten for valgte situasjoner istedenfor å vise. (Vil fortsatt vises dersom bruker ikke har valgt filtrering eller velger "Ingen valg passer").',
    },
    {
      //todo: slett meg når gamle situasjoner er overflødig
      title: "Situasjoner GAMMEL",
      name: "situasjoner",
      type: "array",
      of: [{ type: "string" }],
      inputComponent: VelgSituasjoner,
    },
    {
      title: "Situasjoner NY",
      name: "visForSituasjoner",
      type: "array",
      of: [{ type: "reference", to: [{ type: "situasjon" }] }],
      inputComponent: VelgSituasjonerRef,
    },
  ],
};
