import React, { useCallback } from "react";

import styled from "styled-components";
import { Button } from "access-it";
import CodeIcon from "./CodeIcon.svg";

const BottomOfBox = styled.div`
  background-color: rgb(242, 242, 250);
  width: 100%;
  display: block;
  text-align: right;
  border-top: 1px solid rgb(214, 214, 221);
`;

const ButtonContainer = styled.div``;

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

const H2 = styled.h2`
  position: relative;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SecondRowDiv = styled.div`
  display: block;
  justify-content: space-evenly;
  align-items: center;
`;

const TopOfBox = styled.div`
  // border-bottom: 1px solid rgb(214, 214, 221);
`;

const ButtonSection = React.memo(() => {
  const onKeyDown = useCallback((event) => console.log(event), []);
  const onClick = useCallback((event) => console.log(event), []);

  return (
    <ButtonContainer id="button">
      <H2>Button</H2>
      <Code>Import {"{ Button }"} from "access-it" </Code>

      <H2>Button Types</H2>
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

      <H2>Button Sizes</H2>
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
