import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function EmptyState({ icon, title, description, className }: EmptyStateProps) {
  return (
    <div className={cn("text-center py-16 bg-white rounded-xl border border-dashed border-slate-300", className)}>
      {icon && <div className="flex justify-center mb-3 text-slate-300">{icon}</div>}
      <h3 className="text-lg font-medium text-slate-900">{title}</h3>
      {description && <p className="text-slate-500 mt-1">{description}</p>}
    </div>
  );
}
