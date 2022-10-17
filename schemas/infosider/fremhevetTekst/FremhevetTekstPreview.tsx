import * as React from "react";
import PortableTextContentPreview from "../../../components/PortableTextContentPreview";

export const FremhevetTekstIkon = () => <>❤️</>;

const FremhevetTekstPreview = ({ value }) => {
  return (
    <PortableTextContentPreview
      label={
        <>
          <FremhevetTekstIkon /> Fremhevet tekst
        </>
      }
      color="lightblue"
      value={value}
    />
  );
};

export default FremhevetTekstPreview;
