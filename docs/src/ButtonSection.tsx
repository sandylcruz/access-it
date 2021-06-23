import React, { useCallback } from "react";

import styled from "styled-components";
import { Button } from "access-it";
import {
  BottomOfBox,
  Code,
  H3,
  HeaderTR,
  SmallCode,
  Table,
  TH,
  TD,
  TopOfBox,
} from "./sharedComponents";
import CodeIcon from "./CodeIcon.svg";

const ButtonContainer = styled.div``;

const ButtonBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const SecondRowDiv = styled.div`
  display: block;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonSection = React.memo(() => {
  const onKeyDown = useCallback((event) => console.log(event), []);
  const onClick = useCallback((event) => console.log(event), []);

  return (
    <ButtonContainer id="button">
      <H3>Button</H3>
      <Code>Import {"{ Button }"} from "access-it" </Code>

      <Table>
        <thead>
          <HeaderTR>
            <TH>Argument</TH>
            <TH>Required?</TH>
            <TH>Description</TH>
          </HeaderTR>
        </thead>
        <tbody>
          <tr>
            <TD>
              <SmallCode>kind</SmallCode>
            </TD>
            <TD>Yes</TD>
            <TD>
              Choose the type of button you want. Options are "basic,"
              "primary," or "secondary."
            </TD>
          </tr>
          <tr>
            <TD>
              <SmallCode>size</SmallCode>
            </TD>
            <TD>Yes</TD>
            <TD>
              Choose the size of your button. Options are "small," "medium," or
              "large."
            </TD>
          </tr>
        </tbody>
      </Table>

      <H3>Button Types</H3>
      <ButtonBoxContainer>
        <TopOfBox>
          <Button
            onKeyDown={onKeyDown}
            onClick={onClick}
            kind={"basic"}
            buttonSize={"medium"}
          >
            Basic
          </Button>
          <Button
            onKeyDown={onKeyDown}
            onClick={onClick}
            kind={"primary"}
            buttonSize={"medium"}
          >
            Primary
          </Button>

          <Button
            onKeyDown={onKeyDown}
            onClick={onClick}
            kind={"secondary"}
            buttonSize={"medium"}
          >
            Secondary
          </Button>
          <Button
            onKeyDown={onKeyDown}
            onClick={onClick}
            kind={"secondary"}
            buttonSize={"medium"}
            disabled
          >
            Disabled
          </Button>
        </TopOfBox>
        <BottomOfBox>
          {" "}
          <a href="https://github.com/sandylcruz/access-it/blob/master/src/Button/index.tsx">
            <img src={CodeIcon} alt="Expand code icon" />
          </a>
        </BottomOfBox>
      </ButtonBoxContainer>

      <H3>Button Sizes</H3>
      <SecondRowDiv>
        <ButtonBoxContainer>
          <TopOfBox>
            <Button
              onKeyDown={onKeyDown}
              onClick={onClick}
              kind={"primary"}
              buttonSize={"small"}
            >
              Small
            </Button>
            <Button
              onKeyDown={onKeyDown}
              onClick={onClick}
              kind={"primary"}
              buttonSize={"medium"}
            >
              Medium
            </Button>
            <Button
              onKeyDown={onKeyDown}
              onClick={onClick}
              kind={"primary"}
              buttonSize={"large"}
            >
              Large
            </Button>
          </TopOfBox>
          <BottomOfBox>
            {" "}
            <a href="https://github.com/sandylcruz/access-it/blob/master/src/Button/index.tsx">
              <img src={CodeIcon} alt="Expand code icon" />
            </a>
          </BottomOfBox>
        </ButtonBoxContainer>
      </SecondRowDiv>
    </ButtonContainer>
  );
});

export default ButtonSection;
