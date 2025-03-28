import z from "zod";

export const usernameSchema = z.object({
  username: z
    .string()
    .min(1, "Username must not be blank")
    .max(20, "Username must be less than 20 characters"),
});
