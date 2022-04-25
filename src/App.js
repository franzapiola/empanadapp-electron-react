import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "@routing";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
