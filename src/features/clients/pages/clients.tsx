import { ClientsProvider } from "../context/clients-context";
import ClientsTable from "../components/clients-table";
import { useClients } from "../hooks/use-clients";

export default function ClientsPage() {
  const methods = useClients();

  return (
    <ClientsProvider methods={methods}>
      <ClientsTable />
    </ClientsProvider>
  );
}
