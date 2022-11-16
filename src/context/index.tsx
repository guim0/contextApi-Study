import React from "react";
import { UserContextProvider } from "./user/context";

export const GlobalContext: React.FC = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};
