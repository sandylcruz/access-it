import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import Label from "../Label/index";

const CheckboxAndLabel = styled.div`
  margin: 10px;
`;

const StyledCheckbox = styled.input`
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
  kind: "default" | "hidden" | "secondary";
  ariaChecked: true | false;
  styles?: any;
}

const Checkbox = React.memo<CheckboxProps>(
  ({ ariaChecked, children, id, kind, onClick, styles }) => {
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
      </CheckboxAndLabel>
    );
  }
);

export default Checkbox;
