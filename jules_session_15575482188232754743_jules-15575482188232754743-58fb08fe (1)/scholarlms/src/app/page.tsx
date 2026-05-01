import { SideNav } from "@/components/layout/SideNav";
import { TopNav } from "@/components/layout/TopNav";
import { QuickStats } from "@/components/dashboard/QuickStats";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { UpcomingAssignments } from "@/components/dashboard/UpcomingAssignments";

export default function Home() {
  const courses = [
    { title: "Introduction to Psychology", code: "PSY101", progress: 65, instructor: "Dr. A. Miller", colorClass: "bg-blue-500" },
    { title: "Advanced Calculus", code: "MATH301", progress: 40, instructor: "Prof. J. Davis", colorClass: "bg-indigo-500" },
    { title: "Modern History", code: "HIST201", progress: 85, instructor: "Dr. S. Williams", colorClass: "bg-sky-600" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SideNav />
      <TopNav />
      <main className="pl-64 pt-16">
        <div className="p-8 max-w-7xl mx-auto">
           <h1 className="text-3xl font-bold text-primary mb-2">Welcome back, Jane!</h1>
           <p className="text-foreground/70 mb-8">Here is what&apos;s happening with your courses today.</p>
           
           <QuickStats />

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2">
               <div className="flex items-center justify-between mb-6">
                 <h2 className="text-xl font-bold">Enrolled Courses</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {courses.map(course => (
                   <CourseCard key={course.code} {...course} />
                 ))}
               </div>
             </div>
             <div>
                <UpcomingAssignments />
             </div>
           </div>
        </div>
      </main>
    </div>
  );
}
