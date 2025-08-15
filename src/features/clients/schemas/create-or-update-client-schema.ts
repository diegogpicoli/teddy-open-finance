import { z } from "zod";

export const createOrUpdateClientSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  salary: z.string().min(1, "O salário é obrigatório"),
  companyValuation: z.string().min(1, "O valor da empresa é obrigatório"),
});

export type TCreateOrUpdateClientSchema = z.infer<
  typeof createOrUpdateClientSchema
>;
