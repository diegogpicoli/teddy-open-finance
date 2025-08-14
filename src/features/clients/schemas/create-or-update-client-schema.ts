import { z } from "zod";

export const createOrUpdateClientSchema = z.object({
  name: z.string(),
  salary: z.string(),
  companyValuation: z.string(),
});

export type TCreateOrUpdateClientSchema = z.infer<
  typeof createOrUpdateClientSchema
>;
