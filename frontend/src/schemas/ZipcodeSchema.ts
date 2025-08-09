import { z } from "zod";

export const ZipcodeSchema = z.object({
  cep: z.string(),
  logradouro: z.string(),
  complemento: z.string(),
  unidade: z.string(),
  bairro: z.string(),
  localidade: z.string(),
  uf: z.string().length(2),
  estado: z.string(),
  regiao: z.string(),
  ibge: z.string(),
  gia: z.string(),
  ddd: z.string(),
  siafi: z.string(),
  erro: z.boolean().optional(),
});

export type ZipcodeProps = z.infer<typeof ZipcodeSchema>;
