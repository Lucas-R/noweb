import { z } from "zod";

const MenuLink = z.object({
    to: z.string().optional(),
    label: z.string(),
    sub: z.array(
        z.object({
            to: z.string(),
            label: z.string(),
        })
    ).optional(),
})

export const MenuLinksSchema = MenuLink;

export type MenuLinksProps = z.infer<typeof MenuLinksSchema>;
