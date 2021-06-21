import React from "react";

import styled, { createGlobalStyle } from "styled-components";
import Components from "./Components";

import Navigation from "./Nav";
import Overview from "./Overview";

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
  position: sticky;
  padding-top: 32px;
  min-width: 150px;
  height: 100vh;
  background-color: white;
  z-index: 1001;
  // display: none;
  // @media screen and (min-width: 50px) {
  //   display: flex;
  //   width: 100%;
  // }
`;

const RightSide = styled.div`
  padding-top: 27px;
  margin-left: 60px;
  position: relative;
  overflow: auto;
`;

const App = React.memo(() => {
  return (
    <AppContainer>
      <GlobalStyle />
      <LeftSide>
        <Navigation />
      </LeftSide>

      <RightSide>
        <Overview />
        <Components />
      </RightSide>
    </AppContainer>
  );
});

export default App;
