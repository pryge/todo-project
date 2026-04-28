'use client';

import { useState } from 'react';
import { useTasks } from '../api/task.api';
import { TaskStatus } from '../types/task';
import { TaskFilter } from './TaskFilter';
import { TaskList } from './TaskList';
import { CreateTaskDialog } from './CreateTaskDialog';

export const TaskDashboard = () => {
  const [statusFilter, setStatusFilter] = useState<TaskStatus | 'ALL'>('ALL');
  
  const { data: tasks, isLoading } = useTasks(statusFilter === 'ALL' ? undefined : statusFilter);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Your Tasks</h2>
          <p className="text-slate-500">Here&apos;s a list of your tasks for today!</p>
        </div>
        <CreateTaskDialog />
      </div>

      <TaskFilter value={statusFilter} onChange={setStatusFilter} />
      <TaskList tasks={tasks} isLoading={isLoading} />
    </main>
  );
};
