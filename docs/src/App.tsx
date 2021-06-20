import React, { useCallback } from "react";

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

const App = React.memo(() => {
  const onKeyDown = useCallback((event) => console.log(event), []);
  const onClick = useCallback((event) => console.log(event), []);

  return (
    <DemoDiv className="App">
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
    </DemoDiv>
  );
});

export default App;
