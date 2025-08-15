import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginForm } from "../hooks/use-login-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function LoginForm() {
  const { form, handleLogin } = useLoginForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className="min-h-dvh flex flex-col justify-center items-center gap-5 mx-4 sm:mx-0"
      >
        <h1 className="text-4xl font-normal">Olá, seja bem-vindo!</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col sm:max-w-[521px]">
              <FormControl>
                <Input
                  className="sm:max-w-[521px] min-h-[60px]  placeholder:text-2xl !text-2xl"
                  placeholder="Digite o seu nome:"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="sm:max-w-[521px] w-full min-h-[60px] text-2xl">
          Entrar
        </Button>
      </form>
    </Form>
  );
}
