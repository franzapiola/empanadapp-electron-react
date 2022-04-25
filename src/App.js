import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Home, Counter } from "@screens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
