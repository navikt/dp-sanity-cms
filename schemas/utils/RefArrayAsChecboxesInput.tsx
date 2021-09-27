import * as React from "react";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import styled from "styled-components";
import CheckBox from "../../components/CheckBox";
import { PopoverWorkarround } from "../../style/PopoverWorkarround";

export interface InputComponentProps {
  onChange?: any;
  value?: Ref[];
  type: { jsonType: string; name: string; title: string };
}

type Ref = {
  _ref: string;
  _type: "reference";
};

interface Props extends InputComponentProps {
  tilgjengeligeValg?: { id: string; label: string }[];
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

const createPatchFrom = (value: Ref[]) => PatchEvent.from(value.length === 0 ? unset() : set(value));

function RefArrayAsChecboxesInput(props: Props) {
  if (!props.tilgjengeligeValg) {
    return (
      <div>
        <PopoverWorkarround />
        Laster valg..
      </div>
    );
  }

  const currentValues = props.value || [];

  const handleChange = (id: string) => {
    const newValues: Ref[] = sjekkErValgt(id)
      ? currentValues.filter((value) => value._ref !== id)
      : [...currentValues, { _ref: id, _type: "reference" }];
    props.onChange(createPatchFrom(newValues));
  };

  function sjekkErValgt(id: string) {
    return currentValues.some((it) => it._ref === id);
  }

  const checkboxes = props.tilgjengeligeValg.map((valg) => (
    <CheckBox key={valg.id} label={valg.label} checked={sjekkErValgt(valg.id)} onChange={() => handleChange(valg.id)} />
  ));

  const ugyldigeValg = currentValues
    .map((value) => value._ref)
    .filter((id) => !props.tilgjengeligeValg?.map((valg) => valg.id).includes(id));

  const handleFjerneUgyldigeValg = () => {
    const gyldigeValg = currentValues.filter((it) => !ugyldigeValg.includes(it._ref));
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

export default RefArrayAsChecboxesInput;
