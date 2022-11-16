import { useState } from "react";
import "./App.scss";
import { GlobalContext } from "./context";
import { Routes } from "./routes";

function App() {
  return (
    <GlobalContext>
      <Routes />
    </GlobalContext>
  );
}

export default App;
