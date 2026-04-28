import { Task } from '../types/task';
import { TaskCard } from './TaskCard';
import { ClipboardList } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import { EmptyState } from '@/components/ui/empty-state';

interface TaskListProps {
  tasks?: Task[];
  isLoading: boolean;
}

export const TaskList = ({ tasks, isLoading }: TaskListProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!tasks || tasks.length === 0) {
    return (
      <EmptyState 
        icon={<ClipboardList className="w-12 h-12" />}
        title="No tasks found"
        description="You don't have any tasks right now. Create one!"
      />
    );
  }

  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
