import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createOrUpdateClientSchema,
  type TCreateOrUpdateClientSchema,
} from "../schemas/create-or-update-client-schema";
import { queryClient } from "@/lib/react-query/client";
import { apiGet, apiPatch, apiPost } from "@/lib/api";
import { getPureNumbers, masks } from "@/lib/masks";

import { useClientsContext } from "../context/clients-context";
import type { TClient } from "@/types/clients";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useCreateOrUpdateClient() {
  const {
    createOrUpdateUserModalRef,
    clientSelectedForEdit,
    handleCloseCreateOrUpdateModal,
    updateClientStorage,
  } = useClientsContext();
  const form = useForm<TCreateOrUpdateClientSchema>({
    resolver: zodResolver(createOrUpdateClientSchema),
    defaultValues: {
      name: "",
      salary: "",
      companyValuation: "",
    },
  });

  const { reset } = form;

  const { mutate: createClient, isPending: isPendingCreateClient } =
    useMutation({
      mutationFn: async ({
        name,
        salary,
        companyValuation,
      }: TCreateOrUpdateClientSchema) => {
        const dataToSend = {
          name,
          salary: Number(getPureNumbers(salary)),
          companyValuation: Number(getPureNumbers(companyValuation)),
        };
        return await apiPost(`/users`, dataToSend);
      },
      onSuccess: () => {
        toast.success("Cliente criado com sucesso!");
        queryClient.refetchQueries({
          queryKey: ["users"],
        });
        createOrUpdateUserModalRef.current?.close();
        handleCloseCreateOrUpdateModal();
      },
      onError: () => {
        toast.error("Não foi possível criar o cliente!");
      },
    });

  const { mutate: updateClient, isPending: isPendingUpdateClient } =
    useMutation({
      mutationFn: async ({
        name,
        salary,
        companyValuation,
      }: TCreateOrUpdateClientSchema) => {
        const dataToSend = {
          name,
          salary: Number(getPureNumbers(salary)),
          companyValuation: Number(getPureNumbers(companyValuation)),
        };
        return await apiPatch(
          `/users/${clientSelectedForEdit?.id}`,
          dataToSend
        );
      },
      onSuccess: (data) => {
        toast.success("Cliente atualizado com sucesso!");
        queryClient.refetchQueries({
          queryKey: ["users"],
        });

        updateClientStorage(data as TClient);
        createOrUpdateUserModalRef.current?.close();
        handleCloseCreateOrUpdateModal();
      },
      onError: () => {
        toast.error("Não foi possível atualizar o cliente!");
      },
    });

  const { data: client, isLoading: isLoadingGetClient } = useQuery<TClient>({
    queryKey: ["users-id", clientSelectedForEdit],
    queryFn: () => apiGet<TClient>(`/users/${clientSelectedForEdit?.id}`),
    enabled: !!clientSelectedForEdit?.id,
  });

  const submit = (data: TCreateOrUpdateClientSchema) => {
    if (clientSelectedForEdit) {
      return updateClient(data);
    }
    createClient(data);
  };

  useEffect(() => {
    if (client) {
      reset({
        name: client.name ?? "",
        salary: masks.currency(String(client.salary)),
        companyValuation: masks.currency(String(client.companyValuation)),
      });
    }
  }, [client, reset]);

  return {
    form,
    submit,
    isLoadingCreateOrUpdate: isPendingCreateClient || isPendingUpdateClient,
    isLoadingGetClient,
    clientSelectedForEdit,
  };
}
