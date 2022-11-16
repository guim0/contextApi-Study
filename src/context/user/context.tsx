import React, { createContext, ReactNode, useState } from "react";

type IUser = {
  name: string;
  lastName: string;
  email: string;
};

type PropsUserContext = {
  state: IUser;
  setState: React.Dispatch<React.SetStateAction<IUser>>;
};

const DEFAULT_CONTEXT_VALUE = {
  state: {
    name: "",
    lastName: "",
    email: "",
  },
  setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_CONTEXT_VALUE);

const UserContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_CONTEXT_VALUE.state);
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider };
export default UserContext;
