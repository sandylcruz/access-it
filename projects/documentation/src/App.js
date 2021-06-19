import "./App.css";

import { Button } from "access-it";
console.log(Button);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onKeyDown={(event) => {
            console.log(event);
          }}
          onClick={(event) => {
            console.log(event);
          }}
          tabIndex="0"
        >
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
