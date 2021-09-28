import * as React from "react";
import StringArrayAsChecboxesInput, { InputComponentProps } from "../../../utils/StringArrayAsChecboxesInput";
import useSanityQuery from "../../../../utils/useSanityQuery";
import withErrorBoundary from "../../../../components/withErrorBoundary";
import { Translations } from "../../../../../src/types/translations";
//todo: slett meg når gamle situasjoner er overflødig
type FiltreringsValgData = Translations<string>[] | undefined;

const query = `*[_id == "oppsett"][0].filtreringsvalg`;

function VelgSituasjoner(props: InputComponentProps) {
  const { data } = useSanityQuery<FiltreringsValgData>(query);

  const valg = data?.map((it) => ({ value: it.no || it.en || "N/A", label: it.no || it.en || "N/A" }));

  return <StringArrayAsChecboxesInput {...props} tilgjengeligeValg={valg || []} />;
}

export default withErrorBoundary(VelgSituasjoner);
