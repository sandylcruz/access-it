import "./App.css";

import { Button } from "access-it";
console.log(Button);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={(event) => {
            console.log(event);
          }}
        >
          Hello World
        </Button>
        <Button disabled>disabled</Button>
      </header>
    </div>
  );
}

export default App;
