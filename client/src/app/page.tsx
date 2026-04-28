'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { Header } from '@/components/layout/Header';
import { TaskDashboard } from '@/features/tasks/components/TaskDashboard';

export default function HomePage() {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <TaskDashboard />
    </div>
  );
}
