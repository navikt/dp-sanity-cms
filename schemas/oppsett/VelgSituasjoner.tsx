import * as React from 'react';
import { useRef } from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import { guid } from 'nav-frontend-js-utils';
import useSanityQuery from '../../utils/useSanityQuery';
import styled from 'styled-components';

interface Props {
  filterField?: any;
  level?: any;
  markers?: any;
  onBlur?: any;
  onChange?: any;
  onFocus?: any;
  readOnly?: any;
  type?: any;
  value?: string[];
}

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const createPatchFrom = (value: string[]) => PatchEvent.from(value.length === 0 ? unset() : set(value));

function CheckBox(props: CheckBoxProps) {
  const id = useRef(guid()).current;
  return (
    <div>
      <input id={id} type="checkbox" value={props.label} checked={props.checked} onChange={props.onChange} />
      <label htmlFor={id}>{props.label}</label>
    </div>
  );
}

const query = `*[_id == "oppsett"][0]
{
   filtreringsvalg
}`;

interface Data {
  filtreringsvalg: string[];
}

const UgyldigeValgStyle = styled.p`
  color: red;
`;
function VelgSituasjoner(props: Props) {
  console.log(props);
  const data = useSanityQuery<Data>(query);
  const currentValue = props.value || [];

  const handleChange = (label: string) => {
    const newValues = currentValue.includes(label)
      ? currentValue.filter((it) => it !== label)
      : [...currentValue, label];
    props.onChange(createPatchFrom(newValues));
  };

  const ugyldigeValg = props.value.filter((it) => !data?.filtreringsvalg.includes(it));

  return (
    <div>
      {data?.filtreringsvalg.map((it) => (
        <CheckBox label={it} checked={currentValue.includes(it)} onChange={() => handleChange(it)} />
      ))}
      {!!ugyldigeValg.length && <UgyldigeValgStyle> Ugyldige valg funnet: {ugyldigeValg.join(', ')}</UgyldigeValgStyle>}
    </div>
  );
}

export default VelgSituasjoner;
