import * as React from "react";
import { ReactNode } from "react";
import { FaLightbulb } from "react-icons/fa";
import InlinePreview from "../../../components/InlinePreview";
import { useFaktasider } from "../../../utils/useFaktasider";
import useSanityQuery from "../../../utils/useSanityQuery";

export const InlineVisForIkon = FaLightbulb;
const visForColor = "#80f8";
const skjulForColor = "#f048";

type VisFor = {
  skjulFor?: boolean;
  situasjoner?: string[]; //todo: slett meg når gamle situasjoner er overflødig
  visForSituasjoner?: { _ref: string }[];
};
type VisPaa = { _ref: string }[];

type Valg = {
  name: { _type: "localeString"; en: string; no: string };
  _id: string;
};

function getVisForLabel(visFor: VisFor = {}, situasjonstabell: Valg[]): string {
  if (!visFor.visForSituasjoner?.length) {
    return "";
  }

  const situasjoner =
    visFor.visForSituasjoner
      ?.map((it) => it._ref)
      .map((id) => situasjonstabell?.find((it) => it._id === id)?.name.no || "ukjent situasjon")
      .join(" & ") || "";

  return (visFor.skjulFor ? "Skjules for " : "Vises for ") + situasjoner;
}

interface Props {
  visPaaSider?: VisPaa;
  visFor?: VisFor;
  children: ReactNode;
  _type: "visForAnnotation";
}

function useVisPåSiderLabel(visPåSiderConfig?: VisPaa) {
  const { data: faktasider } = useFaktasider();
  if (!visPåSiderConfig?.length || !faktasider) {
    return "";
  }

  const siderTekstenVisesPå = visPåSiderConfig.map((it) => faktasider.find((side) => side._id === it._ref));
  return "Vises på " + siderTekstenVisesPå.map((side) => side?.slug || "").join(" & ");
}

const query = `*[_type == "situasjon"]`;

export function InlineVisForPreview(props: Props) {
  const { data } = useSanityQuery<Valg[]>(query);

  const visPaaSideLabel = useVisPåSiderLabel(props.visPaaSider);
  const visForSituasjonLabel = getVisForLabel(props.visFor, data || []);
  const label = visForSituasjonLabel + visPaaSideLabel || "Ingen situasjoner valgt";
  const color = props.visFor?.skjulFor ? skjulForColor : visForColor;

  //todo: slett meg når gamle situasjoner er overflødig
  if (props.visFor?.situasjoner?.length) {
    return (
      <InlinePreview label={"Gamle situasjoner! Bytt ut til ny situasjonsvelger"} color="red">
        {props.children}
      </InlinePreview>
    );
  }

  return (
    <InlinePreview label={label} color={color}>
      {props.children}
    </InlinePreview>
  );
}
