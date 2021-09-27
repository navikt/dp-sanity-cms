import * as React from "react";
import useSanityQuery from "../../../../utils/useSanityQuery";
import withErrorBoundary from "../../../../components/withErrorBoundary";
import RefArrayAsChecboxesInput, { InputComponentProps } from "../../../utils/RefArrayAsChecboxesInput";

type Valg = {
  name: { _type: "localeString"; en: string; no: string };
  _id: string;
};

const query = `*[_type == "situasjon"]`;

function VelgSituasjonerRef(props: InputComponentProps) {
  const { data } = useSanityQuery<Valg[]>(query);

  const valg = data?.map((it) => ({ id: it._id, label: it.name.no || it.name.en || "N/A" }));

  return <RefArrayAsChecboxesInput {...props} tilgjengeligeValg={valg || []} />;
}

export default withErrorBoundary(VelgSituasjonerRef);
