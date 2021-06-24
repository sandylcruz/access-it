import React, { useCallback, useState } from "react";

import { Checkbox, Fieldset, Label } from "access-it";
import styled from "styled-components";

import {
  Code,
  DemoContainer,
  H1,
  H2,
  HeaderTR,
  SmallCode,
  Table,
  TD,
  TH,
} from "./sharedComponents";

const BottomOfBox = styled.div`
  background-color: rgb(242, 242, 250);
  width: 100%;
  display: block;
  text-align: right;
  border-bottom: 1px solid rgb(214, 214, 221);
  border-left: 1px solid rgb(214, 214, 221);
  border-right: 1px solid rgb(214, 214, 221);
  margin-top: -15px;
  margin-bottom: 15px;
  border-radius: 0 0 0 5px;
`;

const TopOfBox = styled.div``;

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
      <DemoContainer>
        <TopOfBox>
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
        </TopOfBox>
      </DemoContainer>
      <BottomOfBox>asdfasdf</BottomOfBox>
      asdfasdfafsd
    </CheckboxContainer>
  );
});

export default CheckboxSection;
