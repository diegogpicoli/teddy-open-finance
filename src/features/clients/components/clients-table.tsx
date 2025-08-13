import { useClientsContext } from "@/features/clients/context/clients-context";
import ClientsTableHeader from "./clients-table-header";
import ClientsTableCard from "@/components/clients-table-card";
import CreateClientTable from "./create-client-table";
import { ClientsPaginationTable } from "./clients-pagination-table";
import ClientsTableCardSkeleton from "@/components/clients-table-card/components/clients-table-card-skeleton";

export default function ClientsTable() {
  const { clients, isLoadingClients } = useClientsContext();
  return (
    <div className="flex flex-col gap-2 min-h-[calc(100vh-140px)]">
      <ClientsTableHeader />
      {isLoadingClients ? (
        <ClientsTableCardSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clients?.map((client) => (
            <ClientsTableCard key={client.id} client={client} />
          ))}
        </div>
      )}
      <div className="flex-1 flex flex-col gap-2 justify-end items-end">
        <CreateClientTable />
        <ClientsPaginationTable />
      </div>
    </div>
  );
}
