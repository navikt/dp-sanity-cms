import { useRef } from 'react';
import { guid } from 'nav-frontend-js-utils';
import * as React from 'react';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

function CheckBox(props: CheckBoxProps) {
  const id = useRef(guid()).current;
  return (
    <div>
      <input id={id} type="checkbox" value={props.label} checked={props.checked} onChange={props.onChange} />
      <label htmlFor={id}>{props.label}</label>
    </div>
  );
}

export default CheckBox;
