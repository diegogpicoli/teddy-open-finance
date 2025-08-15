import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useDeleteClient } from "../hooks/use-delete-client";
import { useClientsContext } from "../context/clients-context";

export default function ClientDeleteForm() {
  const { clientSelectedForDelete } = useClientsContext();
  const { isPendingDeleteClient, deleteClient } = useDeleteClient();
  return (
    <div className="space-y-4">
      <p>
        Você está prestes a excluir o cliente:{" "}
        <span className="font-bold">{clientSelectedForDelete?.name}</span>
      </p>
      <Button
        disabled={isPendingDeleteClient}
        onClick={() => deleteClient(clientSelectedForDelete?.id)}
        className="w-full h-10 rounded-xs"
      >
        {isPendingDeleteClient ? (
          <div className="flex justify-center items-center gap-2 mr-2">
            <Loader2 className="animate-spin" />
            Excluindo...
          </div>
        ) : (
          "Excluir cliente"
        )}
      </Button>
    </div>
  );
}
