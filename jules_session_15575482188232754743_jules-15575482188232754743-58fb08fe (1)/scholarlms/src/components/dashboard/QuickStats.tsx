import { Target, Award, Clock } from "lucide-react";

export function QuickStats() {
  const stats = [
    { label: "Current GPA", value: "3.8", icon: Target, trend: "+0.1", color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Credits Earned", value: "45", icon: Award, trend: "On Track", color: "text-indigo-600", bg: "bg-indigo-100" },
    { label: "Study Hours", value: "24h", icon: Clock, trend: "This Week", color: "text-sky-600", bg: "bg-sky-100" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="bg-surface rounded-xl border border-surface-border p-6 flex items-center gap-4 shadow-sm">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-foreground/60">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                <span className="text-xs font-medium text-emerald-600">{stat.trend}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
