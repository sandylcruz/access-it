import React, { useCallback } from "react";

import styled, { createGlobalStyle } from "styled-components";
import { Button } from "access-it";
import Navigation from "./Nav";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: helvetica;
  }
`;

const LeftSide = styled.div`
  position: fixed;
  padding-top: 32px;
  min-width: 190px;
  height: 100vh;
  // box-shadow: 1px 0 5px -2px #aaaaaa;
  // box-shadow: rgb(47 57 65 / 5%) 0px 16px 24px 0px;
`;

const RightSide = styled.div`
  margin-top: 100px;
  margin-left: 250px;
  height: 100vh;
`;

const FirstRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const SecondRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-evenly;
  align-items: center;
`;

const App = React.memo(() => {
  const onKeyDown = useCallback((event) => console.log(event), []);
  const onClick = useCallback((event) => console.log(event), []);

  return (
    <AppContainer>
      <GlobalStyle />
      <LeftSide>
        <Navigation />
      </LeftSide>
      <RightSide>
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
      </RightSide>
    </AppContainer>
  );
});

export default App;
