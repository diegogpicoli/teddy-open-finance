import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useCreateOrUpdateClient from "../hooks/use-create-or-update-client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ClientForm() {
  const {
    form,
    submit,
    isLoadingGetClient,
    clientSelected,
    isLoadingCreateOrUpdate,
  } = useCreateOrUpdateClient();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={isLoadingGetClient}
                  className="!rounded-xs h-10"
                  placeholder="Digite o nome:"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={isLoadingGetClient}
                  mask="currency"
                  className="!rounded-xs h-10"
                  placeholder="Digite o salário:"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyValuation"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={isLoadingGetClient}
                  mask="currency"
                  className="!rounded-xs h-10"
                  placeholder="Digite o valor da empresa:"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full h-10 rounded-xs">
          {isLoadingCreateOrUpdate ? (
            <div className="flex justify-center items-center gap-2 mr-2">
              <Loader2 className="animate-spin" />
              {clientSelected ? "Editando cliente..." : "Criando cliente..."}
            </div>
          ) : clientSelected ? (
            "Editar cliente"
          ) : (
            "Criar cliente"
          )}
        </Button>
      </form>
    </Form>
  );
}
