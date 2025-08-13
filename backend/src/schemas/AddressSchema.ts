import { z } from "zod";

export const AddressSchema = z.object({
    id: z.string().optional(),
    zipcode: z.string(),
    publicPlace: z.string(),
    neighborhood: z.string(),
    number: z.int().optional(),
    uf: z.string(),
    state: z.string(),
    complement: z.string().optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional()
})

export type AddressProps = z.infer<typeof AddressSchema>;