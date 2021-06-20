import "./App.css";
import { Button } from "access-it";
import styled from "styled-components";

const DemoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 100px;
`;

console.log(Button);

function App() {
  return (
    <DemoDiv className="App">
      <Button
        onKeyDown={(event) => {
          console.log(event);
        }}
        onClick={(event) => {
          console.log(event);
        }}
        kind={"basic"}
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
      >
        Secondary
      </Button>
    </DemoDiv>
  );
}

export default App;
