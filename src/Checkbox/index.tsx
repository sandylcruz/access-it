import * as React from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';

const CheckboxAndLabel = styled.div`
  margin: 10px;
`;

const CheckboxInputField = styled.input`
  background-color: pink;
  cursor: pointer;
  transition: 0.3s;
  line-height: 1.4
  user-select: none;
  &:hover {
    border: 1px solid red;
    box-shadow: 0px 0px 10px 2px #8a51ff;
  }

  &:focus {
    border: 1px solid red;
    box-shadow: 0px 0px 10px 2px blue;
  }

  &:active {
    border: 1px solid red;
    box-shadow: 0px 0px 10px 2px green;
  }

    &:disabled {
    background-color: #ededed;
    color: #c9cdd1;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
}

const Checkbox = React.memo<CheckboxProps>(({ checked, onClick, onChange }) => {
  const handleChange = useCallback(
    (event) => {
      if (onChange) {
        onChange(event);
      }
    },
    [onChange],
  );

  return (
    <CheckboxAndLabel>
      <CheckboxInputField
        onClick={onClick}
        role="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </CheckboxAndLabel>
  );
});

export default Checkbox;
