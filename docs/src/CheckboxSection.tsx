import React, { useCallback, useState } from "react";

import { Checkbox, Fieldset, Label } from "access-it";
import styled from "styled-components";

import {
  Code,
  H1,
  H2,
  HeaderTR,
  SmallCode,
  Table,
  TD,
  TH,
} from "./sharedComponents";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  const [isChecked, setIsChecked] = useState(false);

  const onClick = useCallback((event) => console.log(""), []);
  const onChange = useCallback((event) => {
    setIsChecked((previousState) => !previousState);
  }, []);

  return (
    <CheckboxContainer id="checkbox">
      <H1 role="heading">Checkbox</H1>

      <Code>Import {"{ Checkbox }"} from "access-it" </Code>

      <Table>
        <thead>
          <HeaderTR>
            <TH>Argument</TH>
            <TH>Type</TH>
            <TH>Required?</TH>
            <TH>Description</TH>
          </HeaderTR>
        </thead>
        <tbody>
          <tr>
            <TD>
              <SmallCode>checked</SmallCode>
            </TD>
            <TD>
              <SmallCode>boolean</SmallCode>
            </TD>
            <TD>No</TD>
            <TD>Choose if checkbox is pre-checked.</TD>
          </tr>
        </tbody>
      </Table>
      <H2>Checkbox options</H2>

      <BoxContainer>
        <Fieldset>
          <Label>
            <Checkbox
              onClick={onClick}
              onChange={onChange}
              checked={isChecked}
            />
            Default
          </Label>
        </Fieldset>

        <Fieldset>
          <Label>
            <Checkbox onClick={onClick} onChange={onChange} checked={true} />
            Checked
          </Label>
        </Fieldset>
      </BoxContainer>
    </CheckboxContainer>
  );
});

export default CheckboxSection;
