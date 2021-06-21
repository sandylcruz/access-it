import React from "react";

import styled, { createGlobalStyle } from "styled-components";
import ButtonSection from "./ButtonSection";
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
  min-width: 190px;
  height: 100vh;
  background-color: white;
  // box-shadow: 1px 0 5px -2px #aaaaaa;
  // box-shadow: rgb(47 57 65 / 5%) 0px 16px 24px 0px;
`;

const RightSide = styled.div`
  margin-top: 125px;
  margin-left: 60px;
  height: 100vh;
  position: relative;
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
        <ButtonSection />
      </RightSide>
    </AppContainer>
  );
});

export default App;
