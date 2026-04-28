import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { LoginInput, RegisterInput } from '../types/auth';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginInput) => {
      const response = await api.post('/auth/login', data);
      return response.data;
    },
    onSuccess: (data) => {
      login(data.user, data.access_token);
      router.push('/');
    },
  });
};

export const useRegister = () => {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: RegisterInput) => {
      const response = await api.post('/auth/register', data);
      return response.data;
    },
    onSuccess: (data) => {
      login(data.user, data.access_token);
      router.push('/');
    },
  });
};
