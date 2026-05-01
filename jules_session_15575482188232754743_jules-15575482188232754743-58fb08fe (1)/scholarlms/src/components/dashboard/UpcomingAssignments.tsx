import { Clock } from "lucide-react";

export function UpcomingAssignments() {
  const assignments = [
    { title: "Midterm Essay", course: "Modern History 201", due: "Today, 11:59 PM", priority: "High" },
    { title: "Lab Report #4", course: "Intro to Psychology", due: "Tomorrow, 5:00 PM", priority: "Medium" },
    { title: "Calculus Problem Set", course: "Advanced Calculus", due: "Oct 25, 8:00 AM", priority: "Normal" },
  ];

  return (
    <div className="bg-surface rounded-xl border border-surface-border p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Upcoming Assignments</h2>
        <button className="text-sm text-primary font-medium hover:underline">View All</button>
      </div>
      
      <div className="space-y-4">
        {assignments.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 p-4 rounded-lg border border-surface-border hover:border-primary/30 transition-colors">
            <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${item.priority === 'High' ? 'bg-red-500' : item.priority === 'Medium' ? 'bg-amber-500' : 'bg-blue-500'}`} />
            <div className="flex-1">
              <h4 className="font-medium text-foreground">{item.title}</h4>
              <p className="text-sm text-foreground/60">{item.course}</p>
            </div>
            <div className="text-right flex items-center gap-2 text-sm text-foreground/60">
                <Clock className="h-4 w-4" />
                {item.due}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
