import { Task, TaskStatus } from '../types/task';
import { useDeleteTask, useUpdateTask } from '../api/task.api';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, CheckCircle2, Circle, Clock } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask();
  const { mutate: updateTask } = useUpdateTask();

  const handleStatusChange = (status: TaskStatus) => {
    updateTask({ id: task.id, data: { status } });
  };

  const StatusIcon = {
    TODO: <Circle className="w-5 h-5 text-slate-400" />,
    IN_PROGRESS: <Clock className="w-5 h-5 text-amber-500" />,
    DONE: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
  }[task.status];

  return (
    <Card className={`transition-all ${task.status === 'DONE' ? 'opacity-60 bg-slate-50' : 'bg-white'}`}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 p-4">
        <div className="flex items-start gap-3">
          <button 
            className="mt-1 cursor-pointer hover:scale-110 transition-transform focus:outline-none"
            onClick={() => handleStatusChange(task.status === 'DONE' ? 'TODO' : 'DONE')}
          >
            {StatusIcon}
          </button>
          <div>
            <CardTitle className={`text-lg ${task.status === 'DONE' ? 'line-through text-slate-500' : ''}`}>
              {task.title}
            </CardTitle>
            {task.description && (
              <p className="text-sm text-slate-500 mt-1">{task.description}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select value={task.status} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-[140px] h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TODO">To Do</SelectItem>
              <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
              <SelectItem value="DONE">Done</SelectItem>
            </SelectContent>
          </Select>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={() => deleteTask(task.id)}
            disabled={isDeleting}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};
