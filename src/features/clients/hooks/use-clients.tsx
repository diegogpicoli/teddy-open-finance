import { useEffect, useRef, useState } from "react";
import { useGetClients } from "./use-get-clients";
import type { IAlertDialogHandles } from "@/components/modal";
import type { TClient } from "@/types/clients";
import { useSelectedClient } from "./use-selected-client";

export function useClients() {
  const createOrUpdateUserModalRef = useRef<IAlertDialogHandles>(null);
  const deleteUserModalRef = useRef<IAlertDialogHandles>(null);
  const methodsGetClients = useGetClients();
  const methodsSelectClient = useSelectedClient();

  const [clientSelectedForEdit, setClientSelectedForEdit] = useState<
    TClient | undefined
  >(undefined);

  const [clientSelectedForDelete, setClientSelectedForDelete] = useState<
    TClient | undefined
  >(undefined);

  const handleSelectClientForEdit = (client: TClient | undefined) => {
    setClientSelectedForEdit(client);
  };

  const handleCloseCreateOrUpdateModal = () => {
    setTimeout(() => {
      setClientSelectedForEdit(undefined);
    }, 100);
  };

  const handleSelectClientForDelete = (client: TClient | undefined) => {
    setClientSelectedForDelete(client);
  };

  const handleCloseDeleteModal = () => {
    setTimeout(() => {
      setClientSelectedForDelete(undefined);
    }, 100);
  };

  useEffect(() => {
    if (clientSelectedForEdit) {
      return createOrUpdateUserModalRef.current?.open();
    }
  }, [clientSelectedForEdit]);

  useEffect(() => {
    if (clientSelectedForDelete) {
      return deleteUserModalRef.current?.open();
    }
  }, [clientSelectedForDelete]);

  return {
    ...methodsGetClients,
    createOrUpdateUserModalRef,
    handleSelectClientForEdit,
    handleCloseCreateOrUpdateModal,
    clientSelectedForEdit,
    handleSelectClientForDelete,
    clientSelectedForDelete,
    deleteUserModalRef,
    handleCloseDeleteModal,
    ...methodsSelectClient,
  };
}

export type TUseClients = ReturnType<typeof useClients>;
