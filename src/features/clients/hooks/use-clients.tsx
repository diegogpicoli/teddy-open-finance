import { useEffect, useRef, useState } from "react";
import { useGetClients } from "./use-get-clients";
import type { IAlertDialogHandles } from "@/components/modal";
import type { TClient } from "@/types/clients";

export function useClients() {
  const createOrUpdateUserModalRef = useRef<IAlertDialogHandles>(null);

  const methodsGetClients = useGetClients();

  const [clientSelected, setClientSelected] = useState<TClient | undefined>(
    undefined
  );

  const handleSelectClient = (client: TClient | undefined) => {
    setClientSelected(client);
  };

  useEffect(() => {
    if (clientSelected) {
      return createOrUpdateUserModalRef.current?.open();
    }
    createOrUpdateUserModalRef.current?.close();
  }, [clientSelected]);

  return {
    ...methodsGetClients,
    createOrUpdateUserModalRef,
    handleSelectClient,
    clientSelected: clientSelected,
  };
}

export type TUseClients = ReturnType<typeof useClients>;
