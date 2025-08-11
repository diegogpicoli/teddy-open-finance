import { z } from "zod";

export const loginFormSchema = z.object({
  name: z.string(),
});

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;
