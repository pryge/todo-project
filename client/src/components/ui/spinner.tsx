import { cn } from "@/lib/utils";

type SpinnerProps = React.HTMLAttributes<HTMLDivElement>;

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <div className={cn("flex justify-center items-center py-12", className)} {...props}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
}
