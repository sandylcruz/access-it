import React, { useCallback } from "react";

import styled from "styled-components";
import { Button } from "access-it";

const ButtonContainer = styled.div``;

const Code = styled.div`
  background-color: rgb(242, 242, 250);
  color: black;
  font-size: 15px;
  font-family: Consolas, Menlo, monospace;
  margin-bottom: 30px;
  padding: 15px;
  border-radius: 5px;
  width 100%;
`;

const FirstRowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid rgb(214, 214, 221);
  border-radius: 5px;
  width: 100%;
  height: 100px;
  align-items: center;
`;

const H2 = styled.h2`
  position: relative;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SecondRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledButton = styled(Button)`
  color: red;
`;

const ButtonSection = React.memo(() => {
  const onKeyDown = useCallback((event) => console.log(event), []);
  const onClick = useCallback((event) => console.log(event), []);

  return (
    <ButtonContainer>
      <H2>Button</H2>
      <Code>Import {"{ Button }"} from "access-it" </Code>

      <H2>Button Types</H2>
      <FirstRowBox>
        <StyledButton
          onKeyDown={onKeyDown}
          onClick={onClick}
          kind={"basic"}
          buttonSize={"medium"}
        >
          Basic
        </StyledButton>
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
      </FirstRowBox>

      <H2>Button Sizes</H2>
      <SecondRowDiv>
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
      </SecondRowDiv>
    </ButtonContainer>
  );
});

export default ButtonSection;
