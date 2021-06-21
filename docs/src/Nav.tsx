import React from "react";

import styled from "styled-components";
import Logo from "./logo.svg";

const A = styled.a`
  background: rgb(242, 242, 250);
  display: block;
  font-size: 16px;
  padding: 4px 10px;
  width: 100%;
  font-weight: normal;
  margin-bottom: 4px;
  text-decoration: none;

  &:active {
    color: rgb(130, 87, 230);
  }
`;

const Li = styled.li`
  font-family: helvetica;
  font-size: 20px;
  width: 100%;
  transition: all 200ms ease-in-out 0s;
  // padding: 0px 20px;
  &:active {
    border-radius: 4px 10px;
    // background-color: rgb(130, 87, 230);
  }
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
  // padding-left: 30px;
  margin-top: 20px;
`;

const NavigationDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

const Ul = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navigation = () => {
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
          </Li>
          <NavHeader>GETTING STARTED</NavHeader>
          <Li>
            <A aria-current="page" href="/">
              Components
            </A>
          </Li>
          <Li>
            <A aria-current="page" href="/">
              Button
            </A>
          </Li>
        </Ul>
      </Nav>
    </NavigationDiv>
  );
};

export default Navigation;
