import { z } from "zod";

export const loginFormSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
});

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;
