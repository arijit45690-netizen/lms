import { MoreVertical } from "lucide-react";

interface CourseCardProps {
  title: string;
  code: string;
  progress: number;
  instructor: string;
  colorClass: string;
}

export function CourseCard({ title, code, progress, instructor, colorClass }: CourseCardProps) {
  return (
    <div className="bg-surface rounded-xl border border-surface-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg ${colorClass}`}>
          {code.substring(0, 3)}
        </div>
        <button className="text-foreground/50 hover:text-foreground">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-foreground/60 mb-6">{code} • {instructor}</p>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-foreground/70">Progress</span>
          <span className="font-bold text-primary">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-surface-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <button className="w-full mt-6 py-2 rounded-lg border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-colors">
        Continue Learning
      </button>
    </div>
  );
}
