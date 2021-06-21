import React from "react";

import styled from "styled-components";
import Logo from "./logo.svg";

const A = styled.a`
  display: block;
  font-size: 16px;
  padding: 4px 10px;
  width: 100%;
  font-weight: normal;
  margin-bottom: 4px;
  text-decoration: none;
  color: rgb(108, 108, 128);

  &:active {
    color: rgb(130, 87, 230);
    background-color: rgb(242, 242, 250);
    border-radius: 4px 10px;
  }
`;

const Li = styled.li`
  font-family: helvetica;
  font-size: 20px;
  width: 100%;
  transition: all 200ms ease-in-out 0s;
`;

const LogoDiv = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 25px;
`;

const Nav = styled.nav`
  padding-top: 24px;
  align-self: flex-start;
  width: 100%;
  background-color: white;
`;

const NavHeader = styled.div`
  display: block;
  font-size: 15px;
  padding: 4px 10px;
  width: 100%;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.142em;
  margin-bottom: 4px;
  margin-top: 20px;
`;

const NavigationDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  position: fixed;
  background-color: white;
`;

const Ul = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navigation = React.memo(() => {
  return (
    <NavigationDiv>
      <LogoDiv>
        <img src={Logo} alt="logo" width={"150px"}></img>
      </LogoDiv>
      <Nav>
        <Ul>
          <Li>
            {" "}
            <NavHeader>INTRODUCTION</NavHeader>
          </Li>
          <Li>
            <A aria-current="page" href="/">
              Overview
            </A>
            <A aria-current="page" href="/">
              Getting Started
            </A>
          </Li>
          <NavHeader>COMPONENTS</NavHeader>

          <Li>
            <A aria-current="page" href="/">
              Button
            </A>
          </Li>
        </Ul>
      </Nav>
    </NavigationDiv>
  );
});

export default Navigation;
