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

export default function useCreateOrUpdateClient() {
  const { createOrUpdateUserModalRef, clientSelected, handleSelectClient } =
    useClientsContext();
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
        queryClient.refetchQueries({
          queryKey: ["users"],
        });
        handleSelectClient(undefined);
        createOrUpdateUserModalRef.current?.close();
      },
      onError: () => {},
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
        return await apiPatch(`/users/${clientSelected?.id}`, dataToSend);
      },
      onSuccess: () => {
        queryClient.refetchQueries({
          queryKey: ["users"],
        });
        handleSelectClient(undefined);
        createOrUpdateUserModalRef.current?.close();
      },
      onError: () => {},
    });

  const { data: client, isLoading: isLoadingGetClient } = useQuery<TClient>({
    queryKey: ["users-id", clientSelected],
    queryFn: () => apiGet<TClient>(`/users/${clientSelected?.id}`),
    enabled: !!clientSelected?.id,
  });

  const submit = (data: TCreateOrUpdateClientSchema) => {
    if (clientSelected) {
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
    clientSelected,
  };
}
