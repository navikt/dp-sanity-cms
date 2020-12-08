import { useRef } from 'react';
import { guid } from 'nav-frontend-js-utils';
import * as React from 'react';
import styled from 'styled-components';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const StyledInput = styled.input`
  height: 1.4rem;
  width: 1.4rem;
  margin-right: 0.5rem;
`;

const Style = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  label,
  input {
    cursor: pointer;
  }
`;

function CheckBox(props: CheckBoxProps) {
  const id = useRef(guid()).current;
  return (
    <Style>
      <StyledInput id={id} type="checkbox" value={props.label} checked={props.checked} onChange={props.onChange} />
      <label htmlFor={id}>{props.label}</label>
    </Style>
  );
}

export default CheckBox;
