import VelgSituasjonerRef from "./VelgSituasjonerRef";

export default {
  name: "visFor",
  title: "Vis for",
  type: "object",
  fields: [
    {
      type: "boolean",
      name: "skjulFor",
      title: "Omvendt filtrering",
      description:
        'Skru på denne for å skjule teksten for valgte situasjoner istedenfor å vise. (Vil fortsatt vises dersom bruker ikke har valgt filtrering eller velger "Ingen valg passer").',
    },
    {
      title: "Situasjoner",
      name: "visForSituasjoner",
      type: "array",
      of: [{ type: "reference", to: [{ type: "situasjon" }] }],
      inputComponent: VelgSituasjonerRef,
    },
  ],
};
