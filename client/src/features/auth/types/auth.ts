import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Невірний формат email'),
  password: z.string().min(6, 'Пароль має містити мінімум 6 символів'),
});

export const registerSchema = loginSchema.extend({
  name: z.string().min(2, "Ім'я повинно містити мінімум 2 символи"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
