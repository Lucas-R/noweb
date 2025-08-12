import { z } from "zod";

export const AddressSchema = z.object({
    zipcode: z.string(),
    publicPlace: z.string(),
    neighborhood: z.string(),
    number: z.int(),
    uf: z.string(),
    state: z.string(),
    complement: z.string()
})

export type AddressProps = z.infer<typeof AddressSchema>;