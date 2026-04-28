import { z } from 'zod';

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status: TaskStatus;
  userId: number;
}

export const createTaskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
});

export const updateTaskSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'DONE']).optional(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
