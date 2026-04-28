import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TaskStatus } from '../types/task';

interface TaskFilterProps {
  value: TaskStatus | 'ALL';
  onChange: (value: TaskStatus | 'ALL') => void;
}

export const TaskFilter = ({ value, onChange }: TaskFilterProps) => {
  return (
    <div className="mb-6 overflow-x-auto pb-2">
      <Tabs value={value} onValueChange={(val) => onChange(val as TaskStatus | 'ALL')}>
        <TabsList>
          <TabsTrigger value="ALL">All Tasks</TabsTrigger>
          <TabsTrigger value="TODO">To Do</TabsTrigger>
          <TabsTrigger value="IN_PROGRESS">In Progress</TabsTrigger>
          <TabsTrigger value="DONE">Done</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
