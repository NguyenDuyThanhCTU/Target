"use client";
import { useGetDocument } from "@config/Firebase/Service/Database/FireStoreDB";
import React, { createContext, useContext } from "react";

interface DataProviderProps {
  children: React.ReactNode;
}

type DataContextType = {
  users: Array<any>;
  account: Array<any>;
};

export const DataContext = createContext<DataContextType>({
  users: [],
  account: [],
});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const users = useGetDocument("users");
  const account = useGetDocument("account");
  return (
    <DataContext.Provider value={{ users, account }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
