import { BookOpen, Home, Calendar, MessageSquare, Settings, GraduationCap } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Grades", href: "/grades", icon: GraduationCap },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function SideNav() {
  return (
    <aside className="w-64 bg-surface border-r border-surface-border flex flex-col h-screen fixed top-0 left-0">
      <div className="h-16 flex items-center px-6 border-b border-surface-border">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">ScholarLMS</span>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.name === "Dashboard"; // Hardcoded for mockup
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/70 hover:bg-surface-border hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-surface-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            JS
          </div>
          <div>
            <p className="text-sm font-medium">Jane Smith</p>
            <p className="text-xs text-foreground/60">Student</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
