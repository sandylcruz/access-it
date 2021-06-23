import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

const CheckboxAndLabel = styled.div`
  margin: 10px;
`;

const Label = styled.label`
  margin-left: 10px;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
`;

const StyledCheckbox = styled.input`
  background-color: pink;
  cursor: pointer;
  transition: 0.3s;
  line-height: 1.4
  user-select: none;
  &:hover {
    border: 1px solid red;
    box-shadow: 0px 0px 10px 2px blue;
  }

  &:focus {
    border: 1px solid red;
    box-shadow: 0px 0px 10px 2px purple;
  }

  &:active {
    border: 1px solid red;
    box-shadow: 0px 0px 10px 2px green;
  }
`;

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  kind: "default" | "hidden" | "secondary";
  ariaChecked: true | false;
  styles?: any;
}

const Checkbox = React.memo<CheckboxProps>(
  ({ ariaChecked, id, kind, onClick, styles }) => {
    return (
      <CheckboxAndLabel>
        <StyledCheckbox
          // ariaChecked={ariaChecked}
          id={id}
          kind={kind}
          onClick={onClick}
          role="checkbox"
          type="checkbox"
          styles={styles}
        />
        {/* <Label htmlFor="vehicle1" for="c1">
          This is a checkbox with a label
        </Label> */}
      </CheckboxAndLabel>
    );
  }
);

export default Checkbox;
