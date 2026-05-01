import { Bell, Search } from "lucide-react";

export function TopNav() {
  return (
    <header className="h-16 bg-surface border-b border-surface-border flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center text-xl font-semibold">
        Student Dashboard
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-10 pr-4 py-2 bg-background border border-surface-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
          />
        </div>
        <button className="relative p-2 text-foreground/70 hover:bg-surface-border rounded-full transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
