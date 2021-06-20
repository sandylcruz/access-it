import "./App.css";
import { Button } from "access-it";
import styled from "styled-components";

const DemoDiv = styled.div`
  margin-top: 100px;
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

console.log(Button);

function App() {
  return (
    <DemoDiv className="App">
      <FirstRowDiv>
        <Button
          onKeyDown={(event) => {
            console.log(event);
          }}
          onClick={(event) => {
            console.log(event);
          }}
          kind={"basic"}
          buttonSize={"medium"}
        >
          Basic
        </Button>
        <Button
          onKeyDown={(event) => {
            console.log(event);
          }}
          onClick={(event) => {
            console.log(event);
          }}
          kind={"primary"}
          buttonSize={"medium"}
        >
          Primary
        </Button>

        <Button
          onKeyDown={(event) => {
            console.log(event);
          }}
          onClick={(event) => {
            console.log(event);
          }}
          kind={"secondary"}
          buttonSize={"medium"}
        >
          Secondary
        </Button>
        <Button
          onKeyDown={(event) => {
            console.log(event);
          }}
          onClick={(event) => {
            console.log(event);
          }}
          kind={"secondary"}
          buttonSize={"medium"}
          disabled
        >
          Disabled
        </Button>
      </FirstRowDiv>
      <SecondRowDiv>
        <Button
          onKeyDown={(event) => {
            console.log(event);
          }}
          onClick={(event) => {
            console.log(event);
          }}
          kind={"primary"}
          buttonSize={"small"}
        >
          Small
        </Button>
        <Button
          onKeyDown={(event) => {
            console.log(event);
          }}
          onClick={(event) => {
            console.log(event);
          }}
          kind={"primary"}
          buttonSize={"medium"}
        >
          Medium
        </Button>
        <Button
          onKeyDown={(event) => {
            console.log(event);
          }}
          onClick={(event) => {
            console.log(event);
          }}
          kind={"primary"}
          buttonSize={"large"}
        >
          Large
        </Button>
      </SecondRowDiv>
    </DemoDiv>
  );
}

export default App;
