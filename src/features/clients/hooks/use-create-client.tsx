import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import {
  createClientSchema,
  type TCreateClientSchema,
} from "../schemas/create-client-schema";
import { queryClient } from "@/lib/react-query/client";
import { apiPost } from "@/lib/api";
import { getPureNumbers } from "@/lib/masks";

import { useClientsContext } from "../context/clients-context";

export default function useCreateClient() {
  const { createUserModalRef } = useClientsContext();
  const form = useForm<TCreateClientSchema>({
    resolver: zodResolver(createClientSchema),
    defaultValues: {
      name: "",
      salary: "",
      companyValuation: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      name,
      salary,
      companyValuation,
    }: TCreateClientSchema) => {
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
      createUserModalRef.current?.onChangeIsOpen();
    },
    onError: () => {},
  });

  const submit = (data: TCreateClientSchema) => {
    mutate(data);
  };

  return {
    form,
    submit,
    isPendingCreateContact: isPending,
  };
}
