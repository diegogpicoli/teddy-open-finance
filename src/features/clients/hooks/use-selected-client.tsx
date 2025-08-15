import type { TClient } from "@/types/clients";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export function useSelectedClient() {
  const [clientsSelected, setClients] = useState<TClient[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("teddy-open-finance:clients");
    if (stored) {
      setClients(JSON.parse(stored));
    }
  }, []);

  const updateStorage = (newClients: TClient[]) => {
    setClients(newClients);
    localStorage.setItem(
      "teddy-open-finance:clients",
      JSON.stringify(newClients)
    );
  };

  const addClient = (client: TClient) => {
    if (!isClientSelected(client.id)) {
      toast.success(`Cliente "${client.name}" adicionado à seleção!`);
      updateStorage([...clientsSelected, client]);
    }
  };

  const removeClient = (id: number) => {
    const client = clientsSelected.find((c) => c.id === id);
    toast.success(`Cliente "${client?.name}" removido da seleção.`);
    updateStorage(clientsSelected.filter((c) => c.id !== id));
  };

  const updateClientStorage = (newClient: TClient) => {
    const clientsFilter = clientsSelected.filter(
      (client) => client.id !== newClient.id
    );
    updateStorage([...clientsFilter, newClient]);
  };

  const isClientSelected = (id: number) => {
    return clientsSelected.some((c) => c.id === id);
  };

  const clearClients = () => {
    updateStorage([]);
  };

  return {
    clientsSelected,
    addClient,
    removeClient,
    isClientSelected,
    clearClients,
    updateClientStorage,
  };
}
