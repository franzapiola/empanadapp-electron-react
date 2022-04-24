import "./App.css";
import { Welcome } from "@screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="welcome" element={<Welcome />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
