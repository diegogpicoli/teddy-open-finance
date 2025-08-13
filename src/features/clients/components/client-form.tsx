import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useCreateClient from "../hooks/use-create-client";
import { Button } from "@/components/ui/button";

export default function ClientForm() {
  const { form, submit } = useCreateClient();
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
                  mask="currency"
                  className="!rounded-xs h-10"
                  placeholder="Digite o valor da empresa:"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full h-10 rounded-xs">Criar cliente</Button>
      </form>
    </Form>
  );
}
