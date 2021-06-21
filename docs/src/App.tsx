import React, { useCallback } from "react";

import { Button } from "access-it";
import Logo from "./logo.svg";
import styled, { createGlobalStyle } from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const LeftSide = styled.div`
  background-color: #f7f6f6;
  min-width: 190px;
  height: 100vh;
  // box-shadow: 1px 0 5px -2px #aaaaaa;
  box-shadow: rgb(47 57 65 / 5%) 0px 16px 24px 0px;
`;

const Li = styled.li`
  font-family: helvetica;
  font-size: 20px;
`;

const LogoDiv = styled.div`
  width: 100px;
  height: 150px;
  margin-top: 25px;
  margin-left: 20px;
`;

const RightSide = styled.div`
  margin-top: 100px;
  margin-left: 20px;
  height: 100vh;
`;

const FirstRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const NavigationDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

const SecondRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-evenly;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  // margin: 20px;
`;

const App = React.memo(() => {
  const onKeyDown = useCallback((event) => console.log(event), []);
  const onClick = useCallback((event) => console.log(event), []);

  return (
    <AppContainer>
      <GlobalStyle />
      <LeftSide>
        <LogoDiv>
          <img src={Logo} alt="logo" width={"150px"}></img>
        </LogoDiv>
        <NavigationDiv>
          <Ul>
            <Li>Introduction</Li>
            <Li>Getting Started</Li>
            <Li>-------</Li>
            <Li>Components</Li>
            <Li>Button</Li>
          </Ul>
        </NavigationDiv>
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
