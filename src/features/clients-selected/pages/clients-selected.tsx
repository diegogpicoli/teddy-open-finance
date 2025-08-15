import ClientsTableCard from "@/components/clients-table-card";
import RemoveIcon from "@/components/icons/remove-icon";
import { Button } from "@/components/ui/button";
import { useSelectedClient } from "@/features/clients/hooks/use-selected-client";

export default function ClientsSelectedPage() {
  const { clientsSelected, removeClient, clearClients } = useSelectedClient();

  const hasClients = clientsSelected && clientsSelected.length > 0;
  return (
    <div className="flex flex-col gap-2 min-h-[calc(100vh-140px)]">
      <h3 className="text-2xl font-bold">Clientes selecionados:</h3>
      {hasClients ? (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {clientsSelected.map((client) => (
              <ClientsTableCard key={client.id} client={client}>
                <div className="flex justify-end items-center px-4 mt-3">
                  <button
                    className="cursor-pointer min-w-5"
                    onClick={() => removeClient(client.id)}
                  >
                    <RemoveIcon />
                  </button>
                </div>
              </ClientsTableCard>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-2 justify-end items-end">
            <Button
              onClick={clearClients}
              className="w-full mt-5"
              variant="outline"
            >
              Limpar clientes selecionados
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1 text-center text-gray-500 py-10">
          <p className="text-lg font-medium">
            Nenhum cliente selecionado no momento
          </p>
          <p className="text-sm">
            Vá até a lista de clientes e selecione os que deseja visualizar
            aqui.
          </p>
        </div>
      )}
    </div>
  );
}
