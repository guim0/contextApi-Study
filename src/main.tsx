import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
export const Context = createContext(0);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
