import { z } from "zod";

export const createClientSchema = z.object({
  name: z.string(),
  salary: z.string(),
  companyValuation: z.string(),
});

export type TCreateClientSchema = z.infer<typeof createClientSchema>;
