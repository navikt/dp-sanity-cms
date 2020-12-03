import * as React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import useSanityQuery from '../../utils/useSanityQuery';
import styled from 'styled-components';
import CheckBox from '../../components/CheckBox';

interface FiltreringsValgData {
  filtreringsvalg?: string[];
}

interface Props {
  onChange?: any;
  value?: string[];
  type: { jsonType: string; name: string; title: string };
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
const query = `*[_id == "oppsett"][0]
{
   filtreringsvalg
}`;

function VelgSituasjoner(props: Props) {
  const data = useSanityQuery<FiltreringsValgData>(query);
  const currentValue = props.value || [];
  console.log(props);
  const handleChange = (label: string) => {
    const newValues = currentValue.includes(label)
      ? currentValue.filter((it) => it !== label)
      : [...currentValue, label];
    props.onChange(createPatchFrom(newValues));
  };

  const ugyldigeValg = props.value?.filter((it) => !data?.filtreringsvalg?.includes(it));

  const handleFjerneUgyldigeValg = () => {
    const newValues = currentValue.filter((it) => !ugyldigeValg?.includes(it));
    props.onChange(createPatchFrom(newValues));
  };

  const finnesUgyldigeValg = !!ugyldigeValg?.length;

  return (
    <div>
      <StyledLegend>{props.type.title}</StyledLegend>
      <Border>
        {data?.filtreringsvalg?.map(
          (it) => it && <CheckBox label={it} checked={currentValue.includes(it)} onChange={() => handleChange(it)} />
        )}
        {finnesUgyldigeValg && (
          <UgyldigeValgStyle>
            <p>Ugyldige valg funnet: {ugyldigeValg?.join(', ')}</p>
            <FjernValgButton onClick={handleFjerneUgyldigeValg}>Fjern ugyldige valg</FjernValgButton>
          </UgyldigeValgStyle>
        )}
      </Border>
    </div>
  );
}

export default VelgSituasjoner;
