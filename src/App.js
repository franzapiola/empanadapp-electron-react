import logo from "./logo.svg";
import "./App.css";
import { Button } from "@atoms";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        EMPANADAPP
        <Button onPress={() => console.log("ON PRESS")}>BOTÓN</Button>
      </header>
    </div>
  );
}

export default App;
