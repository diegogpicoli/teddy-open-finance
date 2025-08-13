"use client";
import { createContext, useContext, type ReactNode } from "react";

import type { TUseClients } from "../hooks/use-clients";

const ClientsContext = createContext<TUseClients | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useClientsContext = () => {
  const context = useContext(ClientsContext);
  if (context === null) {
    throw new Error("useClients must be used within a ClientsProvider");
  }
  return context;
};

export const ClientsProvider = ({
  methods,
  children,
}: {
  methods: TUseClients;
  children: ReactNode;
}) => {
  return (
    <ClientsContext.Provider value={methods}>
      {children}
    </ClientsContext.Provider>
  );
};
