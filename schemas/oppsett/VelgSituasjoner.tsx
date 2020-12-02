import * as React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import { guid } from 'nav-frontend-js-utils';
import { useRef, useState } from 'react';

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

const valg = ['Celine', 'Daniel', 'Synneva'];

function VelgSituasjoner(props: Props) {
  console.log(props);
  const currentValue = props.value || [];

  const handleChange = (label: string) => {
    if (currentValue.includes(label)) {
      const newValues = currentValue.filter((it) => it !== label);
      props.onChange(createPatchFrom(newValues));
    } else {
      const newValues = [...currentValue, label];
      props.onChange(createPatchFrom(newValues));
    }
  };

  return (
    <div>
      {props.value}
      {valg.map((it) => (
        <CheckBox label={it} checked={currentValue.includes(it)} onChange={() => handleChange(it)} />
      ))}
    </div>
  );
}

export default VelgSituasjoner;
