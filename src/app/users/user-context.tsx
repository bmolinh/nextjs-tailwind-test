"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "./types";

type UsersContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const UsersContext = createContext<UsersContextType>({
  users: [],
  setUsers: () => {},
});

export function useUsers() {
  return useContext(UsersContext);
}

interface UsersProviderProps {
  children: ReactNode;
}

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}
