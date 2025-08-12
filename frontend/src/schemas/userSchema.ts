import { z } from "zod";

export const userSchema = z.object({
  username: z.string(),
  name: z.string(),
  avatar: z.string()
});

export type UserProps = z.infer<typeof userSchema>;