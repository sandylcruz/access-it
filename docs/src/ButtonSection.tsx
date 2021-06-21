import React, { useCallback } from "react";

import styled from "styled-components";
import { Button } from "access-it";

const ButtonContainer = styled.div``;

const FirstRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const H2 = styled.h2`
  position: relative;
  font-weight: bold;
  margin-bottom: 18px;
`;

const SecondRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonSection = React.memo(() => {
  const onKeyDown = useCallback((event) => console.log(event), []);
  const onClick = useCallback((event) => console.log(event), []);

  return (
    <ButtonContainer>
      <H2>Buttons</H2>
      <FirstRowDiv>
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
      </FirstRowDiv>

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
