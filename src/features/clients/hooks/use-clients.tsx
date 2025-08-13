import { useRef } from "react";
import { useGetClients } from "./use-get-clients";
import type { IAlertDialogHandles } from "@/components/modal";

export function useClients() {
  const createUserModalRef = useRef<IAlertDialogHandles>(null);
  const methodsGetClients = useGetClients();

  return {
    ...methodsGetClients,
    createUserModalRef,
  };
}

export type TUseClients = ReturnType<typeof useClients>;
