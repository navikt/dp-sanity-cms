import * as React from "react";
import withErrorBoundary from "../../../components/withErrorBoundary";
import { Translations } from "../../../../src/types/translations";
import useSanityQuery from "../../../utils/useSanityQuery";
import StringArrayAsChecboxesInput, { InputComponentProps } from "../../utils/StringArrayAsChecboxesInput";

type Infoside = {
  _id: string;
  title: Translations<string>;
};

const query = `*[_type == "faktaSide" && !(_id in path("drafts.**"))] {
  _id,
  title
}`;

function VelgInfosider(props: InputComponentProps) {
  const { data } = useSanityQuery<Infoside[]>(query);
  const valg = data?.map((it) => ({ value: it._id, label: it.title.no || it.title.en || it._id }));
  return <StringArrayAsChecboxesInput {...props} tilgjengeligeValg={valg || []} />;
}

export default withErrorBoundary(VelgInfosider);
