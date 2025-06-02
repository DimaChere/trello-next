import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const loginSchema = z.object({
    name: z.string().min(1, "Name is required"),
});

export type LoginType = z.infer<typeof loginSchema>;

export const LoginFormResolver = zodResolver(loginSchema);
