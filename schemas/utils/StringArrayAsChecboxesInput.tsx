import * as React from "react";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import styled from "styled-components";
import CheckBox from "../../components/CheckBox";
import { PopoverWorkarround } from "../../style/PopoverWorkarround";

export interface InputComponentProps {
  onChange?: any;
  value?: string[];
  type: { jsonType: string; name: string; title: string };
}

interface Props extends InputComponentProps {
  tilgjengeligeValg?: { value: string; label: string }[];
}

const UgyldigeValgStyle = styled.div`
  color: red;
  p {
    margin-bottom: 0;
  }
`;

const FjernValgButton = styled.button`
  background: none;
  border: none;
  color: #0586db;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
`;

const StyledLegend = styled.legend`
  font-size: 1.25rem;
`;

const Border = styled.div`
  border: 1px solid rgba(123, 140, 168, 0.25);
  border-radius: 6px;
  padding: 1rem;
  margin-top: 0.25rem;
`;

const createPatchFrom = (value: string[]) => PatchEvent.from(value.length === 0 ? unset() : set(value));

function StringArrayAsChecboxesInput(props: Props) {
  if (!props.tilgjengeligeValg) {
    return (
      <div>
        <PopoverWorkarround />
        Laster valg..
      </div>
    );
  }

  const currentValues = props.value || [];

  const handleChange = (value: string) => {
    const newValues = currentValues.includes(value)
      ? currentValues.filter((it) => it !== value)
      : [...currentValues, value];
    props.onChange(createPatchFrom(newValues));
  };

  const checkboxes = props.tilgjengeligeValg.map((it) => (
    <CheckBox
      key={it.value}
      label={it.label || it.value}
      checked={currentValues.includes(it.value)}
      onChange={() => handleChange(it.value)}
    />
  ));

  const ugyldigeValg = currentValues.filter(
    (it) => !props.tilgjengeligeValg?.map((choice) => choice.value).includes(it)
  );

  const handleFjerneUgyldigeValg = () => {
    const gyldigeValg = currentValues.filter((it) => !ugyldigeValg.includes(it));
    props.onChange(createPatchFrom(gyldigeValg));
  };

  const fjernUgyldigeValg = (
    <UgyldigeValgStyle>
      <p>Ugyldige valg funnet: {ugyldigeValg.join(", ")}</p>
      <FjernValgButton onClick={handleFjerneUgyldigeValg}>Fjern ugyldige valg</FjernValgButton>
    </UgyldigeValgStyle>
  );

  return (
    <div>
      <PopoverWorkarround /> {/* Importeres her fordi denne komponenten mountes når man har vis for annotation åpen */}
      <StyledLegend>{props.type.title}</StyledLegend>
      <Border>
        {checkboxes}
        {!checkboxes && <div>Fant ingen valg.</div>}
        {ugyldigeValg.length > 0 && fjernUgyldigeValg}
      </Border>
    </div>
  );
}

export default StringArrayAsChecboxesInput;
