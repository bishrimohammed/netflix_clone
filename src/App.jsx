import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
