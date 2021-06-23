import React, { useCallback } from "react";

import { Checkbox } from "access-it";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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

const Code = styled.div`
  background-color: rgb(242, 242, 250);
  color: black;
  font-size: 15px;
  font-family: Consolas, Menlo, monospace;
  margin-bottom: 30px;
  padding: 15px;
  border-radius: 5px;
  min-width: 550px;
  max-width: 600px;
`;

const H2 = styled.h2`
  position: relative;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CheckboxSection = React.memo(() => {
  const onClick = useCallback((event) => console.log(event), []);
  return (
    <CheckboxContainer id="checkbox">
      <H2 role="heading">Checkbox</H2>

      <Code>Import {"{ Checkbox }"} from "access-it" </Code>
      <BoxContainer>
        <label id="c1">Testing 1</label>
        <Checkbox
          onClick={onClick}
          kind={"default"}
          ariaChecked={true}
          id="c1"
        />

        <label id="c2">Testing 2</label>
        <Checkbox
          onClick={onClick}
          kind={"default"}
          ariaChecked={false}
          id="c2"
        />
      </BoxContainer>
    </CheckboxContainer>
  );
});

export default CheckboxSection;
