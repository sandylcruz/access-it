import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

const CheckboxAndLabel = styled.fieldset`
  margin: 10px;
`;

const Label = styled.label`
  margin-left: 10px;
  font-weight: bold;
  user-select: none;
`;

const StyledCheckbox = styled.input`
  &:disabled {
    background-color: #ededed;
    color: #c9cdd1;
    cursor: not-allowed;
  }
`;

interface CheckboxProps extends React.HTMLProps<HTMLButtonElement> {
  kind: "default" | "hidden" | "secondary";
  ariaChecked: true | false;
  styles?: any;
}

const Checkbox = React.memo<CheckboxProps>(
  ({ ariaChecked, kind, onClick, styles }) => {
    return (
      <CheckboxAndLabel>
        <StyledCheckbox
          ariaChecked={ariaChecked}
          id="c1"
          kind={kind}
          onClick={onClick}
          role="checkbox"
          type="checkbox"
          styles={styles}
        />
        <Label htmlFor="vehicle1" for="c1">
          This is a checkbox with a label
        </Label>
      </CheckboxAndLabel>
    );
  }
);

export default Checkbox;
