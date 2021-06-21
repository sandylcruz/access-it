import React from "react";

import styled from "styled-components";

const Arguments = styled.div``;

const Code = styled.div`
  background-color: rgb(242, 242, 250);
  color: black;
  font-family: Consolas, Menlo, monospace;
  margin-bottom: 10px;
  padding: 25px;
  border-radius: 5px;
  max-width: 580px;
`;

const H1 = styled.h1`
  position: relative;
  font-weight: bold;
  margin-bottom: 24px;
`;

const H2 = styled.h2`
  position: relative;
  font-weight: bold;
  margin-bottom: 18px;
`;

const HeaderTR = styled.tr`
  background-color: #f9f9f9;
  color: black;
  text-align: left;
  border-radius: 4px;
  max-width: 200px;
`;

const LICode = styled.code`
  background-color: rgb(242, 242, 250);
  color: black;
  font-family: Consolas, Menlo, monospace;
  padding: 5px;
  border-radius: 5px;
`;

const Ol = styled.ol`
  display: block;
  color: rgb(108, 108, 128);
  line-height: 28px;
  margin-bottom: 16px;
  font-weight: 400;
  margin-left: 45px;
`;

const OverviewContainer = styled.div``;

const P = styled.p`
  display: block;
  color: rgb(108, 108, 128);
  line-height: 28px;
  margin-bottom: 16px;
  font-weight: 400;
`;

const SmallCode = styled.div`
  background-color: rgb(242, 242, 250);
  color: black;
  font-family: Consolas, Menlo, monospace;
  padding: 8px;
  border-radius: 5px;
`;

const Table = styled.table`
  margin: 25px 0;
  font-size: 0.9em;
  border-collapse: separate;
  border-spacing: 0px 4px;
  margin-bottom: 16px;
  border-radius: 4px;
`;

const TD = styled.td`
  padding: 12px 15px;
`;

const TH = styled.th`
  padding: 12px 15px;
`;

const Overview = React.memo(() => {
  return (
    <OverviewContainer id="overview">
      <H1>Overview</H1>
      <P>
        AccessIt is a collection of accessible components that follow WAI-ARIA
        accessibility guidelines.
      </P>

      <div id="gettingStarted">
        <H1>Getting Started</H1>
      </div>
      <H2>Installation</H2>
      <Code>npm install access-it react styled-components --save</Code>
      <Code>yarn add access-it react styled-components</Code>

      <Arguments>
        <H2>Arguments</H2>
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
                Choose the size of your button. Options are "small," "medium,"
                or "large."
              </TD>
            </tr>
          </tbody>
        </Table>

        <H2>Development</H2>
        <P>
          <b>In order to start working:</b>
        </P>
        <Ol>
          <li>
            Run <LICode>yarn start</LICode> to get the source code and Webpack
            server running
          </li>
          <li>
            Run <LICode>yarn start</LICode> in docs to get the documentation
            server running.
          </li>
          <li>
            Open <LICode>http://localhost:3000</LICode>.
          </li>
        </Ol>

        <P>
          <b>In order to publish:</b>
        </P>
        <Ol>
          <li>
            After the repo is in the correct state, bump the package version
            following <a href="https://semver.org">semantic versioning</a>
          </li>
          <li>
            Commit the package bump in a commit with a comment like "Bump to
            1.0.1".
          </li>
          <li>
            Run npm publish <LICode>--access public</LICode>.
          </li>
        </Ol>
      </Arguments>
    </OverviewContainer>
  );
});

export default Overview;
