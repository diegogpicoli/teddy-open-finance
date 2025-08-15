import { apiDelete } from "@/lib/api";
import { queryClient } from "@/lib/react-query/client";
import { useMutation } from "@tanstack/react-query";
import { useClientsContext } from "../context/clients-context";
import { toast } from "sonner";

export function useDeleteClient() {
  const { handleCloseDeleteModal, deleteUserModalRef } = useClientsContext();
  const { mutate, isPending } = useMutation({
    mutationFn: async (clientId: number | undefined) => {
      return await apiDelete(`/users/${clientId}`);
    },
    onSuccess: () => {
      toast.success("Cliente deletado com sucesso!");
      queryClient.refetchQueries({
        queryKey: ["users"],
      });
      deleteUserModalRef.current?.close();
      handleCloseDeleteModal();
    },
    onError: () => {
      toast.error("Não foi possível deletar o cliente!");
    },
  });

  return {
    deleteClient: mutate,
    isPendingDeleteClient: isPending,
  };
}
