import { useMutation, useQuery, useQueryClient, keepPreviousData } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { Task, CreateTaskInput, UpdateTaskInput, TaskStatus } from '../types/task';

export const useTasks = (status?: TaskStatus) => {
  return useQuery({
    queryKey: ['tasks', status],
    queryFn: async () => {
      const { data } = await api.get<Task[]>('/tasks', {
        params: { status },
      });
      return data;
    },
    placeholderData: keepPreviousData,
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateTaskInput) => {
      const { data: response } = await api.post<Task>('/tasks', data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UpdateTaskInput }) => {
      const { data: response } = await api.patch<Task>(`/tasks/${id}`, data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/tasks/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
