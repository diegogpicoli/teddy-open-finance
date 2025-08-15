import { useClientsContext } from "@/features/clients/context/clients-context";
import ClientsTableHeader from "./clients-table-header";
import ClientsTableCard from "@/components/clients-table-card";

import { ClientsPaginationTable } from "./clients-pagination-table";
import ClientsTableCardSkeleton from "@/components/clients-table-card/components/clients-table-card-skeleton";
import PlusIcon from "@/components/icons/plus-icon";
import PenIcon from "@/components/icons/pen-icon";
import TrashIcon from "@/components/icons/trash-icon";
import { Fragment } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/modal";
import ClientForm from "./client-form";
import ClientDeleteForm from "./client-delete-form";

import RemoveIcon from "@/components/icons/remove-icon";

export default function ClientsTable() {
  const {
    clients,
    isLoadingClients,
    createOrUpdateUserModalRef,
    handleSelectClientForEdit,
    handleCloseCreateOrUpdateModal,
    clientSelectedForEdit,
    handleSelectClientForDelete,
    deleteUserModalRef,
    handleCloseDeleteModal,
    addClient,
    removeClient,
    isClientSelected,
  } = useClientsContext();

  return (
    <div className="flex flex-col gap-2 min-h-[calc(100vh-140px)]">
      <ClientsTableHeader />
      {isLoadingClients ? (
        <ClientsTableCardSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clients?.map((client) => {
            return (
              <ClientsTableCard key={client.id} client={client}>
                <div className="flex justify-between items-center px-4 mt-3">
                  {!isClientSelected(client.id) && (
                    <button
                      className="cursor-pointer min-w-5"
                      onClick={() => addClient(client)}
                    >
                      <PlusIcon />
                    </button>
                  )}
                  {isClientSelected(client.id) && (
                    <button
                      className="cursor-pointer min-w-5"
                      onClick={() => removeClient(client.id)}
                    >
                      <RemoveIcon />
                    </button>
                  )}
                  <button
                    className="cursor-pointer"
                    onClick={() => handleSelectClientForEdit(client)}
                  >
                    <PenIcon />
                  </button>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleSelectClientForDelete(client)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </ClientsTableCard>
            );
          })}
        </div>
      )}
      <div className="flex-1 flex flex-col gap-2 justify-end items-end">
        <Fragment>
          <Button
            onClick={() => createOrUpdateUserModalRef.current?.open()}
            className="w-full mt-5"
            variant="outline"
          >
            Criar cliente
          </Button>
        </Fragment>
        <ClientsPaginationTable />
      </div>
      <Modal
        onClose={handleCloseCreateOrUpdateModal}
        ref={createOrUpdateUserModalRef}
        title={clientSelectedForEdit ? "Editar cliente" : "Criar cliente"}
      >
        <ClientForm />
      </Modal>

      <Modal
        onClose={handleCloseDeleteModal}
        ref={deleteUserModalRef}
        title="Excluir cliente:"
      >
        <ClientDeleteForm />
      </Modal>
    </div>
  );
}
