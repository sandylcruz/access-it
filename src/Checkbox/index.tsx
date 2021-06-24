import * as React from "react";
import { useCallback, useState } from "react";
import styled from "styled-components";

import Label from "../Label/index";

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
`;

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styles?: any;
  checked?: boolean;
}

const Checkbox = React.memo<CheckboxProps>(
  ({ checked, onClick, onChange, styles }) => {
    const handleChange = useCallback(
      (event) => {
        if (onChange) {
          onChange(event);
        }
      },
      [onChange]
    );

    return (
      <CheckboxAndLabel>
        <CheckboxInputField
          onClick={onClick}
          role="checkbox"
          type="checkbox"
          styles={styles}
          checked={checked}
          onChange={handleChange}
        />
      </CheckboxAndLabel>
    );
  }
);

export default Checkbox;
