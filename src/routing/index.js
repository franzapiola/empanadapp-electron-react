import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Welcome, Home, Counter } from "@screens";
import useStore from "@state";

const Router = () => {
  const { username } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (username === "Usuario") {
      navigate("/");
    }
  }, [username, navigate]);
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};

export default Router;
