"use client";
import React, { createContext, useContext, useState } from "react";

export type StateContextType = {
  State: string;
  setState: (state: string) => void;
  Verify: boolean;
  setVerify: (Verify: boolean) => void;
  IsChangePassword: boolean;
  setIsChangePassword: (isLoading: boolean) => void;
};

type StateProviderProps = {
  children: React.ReactNode;
};

export const StateContext = createContext<StateContextType>({
  State: "",
  setState: () => {},
  Verify: false,
  setVerify: () => {},
  IsChangePassword: false,
  setIsChangePassword: () => {},
});

export const StateProvider = ({ children }: StateProviderProps) => {
  const [IsChangePassword, setIsChangePassword] = useState(false);
  const [Verify, setVerify] = useState(false);
  const [State, setState] = useState("");

  return (
    <StateContext.Provider
      value={{
        State,
        setState,
        IsChangePassword,
        setIsChangePassword,
        Verify,
        setVerify,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
