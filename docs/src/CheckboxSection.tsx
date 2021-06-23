import React, { useCallback } from "react";

import { Checkbox, Fieldset, Label } from "access-it";
import styled from "styled-components";

import { Code, H2 } from "./sharedComponents";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-evenly;
  border-radius: 5px;
  height: 100%;
  min-width: 550px;
  max-width: 600px;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid rgb(214, 214, 221);
`;

const CheckboxContainer = styled.div``;

const CheckboxSection = React.memo(() => {
  const onClick = useCallback((event) => console.log(event), []);
  return (
    <CheckboxContainer id="checkbox">
      <H2 role="heading">Checkbox</H2>

      <Code>Import {"{ Checkbox }"} from "access-it" </Code>
      <BoxContainer>
        <Fieldset>
          <Label htmlFor="c1">
            <Checkbox onClick={onClick} ariaChecked={true} id="c1" />
            Testing 1
          </Label>
        </Fieldset>
        {/* <Label id="c2">Testing 2</Label>
        <Checkbox onClick={onClick} ariaChecked={false} id="c2" /> */}
      </BoxContainer>
    </CheckboxContainer>
  );
});

export default CheckboxSection;
