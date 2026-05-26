import { createClient } from '@supabase/supabase-js';
import type { Course } from '@/types/database.types';
import Sidebar from '@/components/Sidebar';
import BentoGrid from '@/components/BentoGrid';

// Initializing Supabase securely on Server Side
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Next.js revalidate (No caching layout shift proof)
export const revalidate = 0;

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error("Database connection failed:", error.message);
    return []; // Failure fallback to avoid app crash
  }

  return data as Course[];
}

export default async function DashboardPage() {
  const courses = await getCourses();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zinc-950 text-zinc-50 antialiased">
      {/* Interactive Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <header className="p-6 border-b border-zinc-900/50 flex justify-between items-center md:block hidden">
          <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
            System Status: Operational
          </span>
        </header>
        
        {/* Bento Grid Wrapper */}
        <BentoGrid courses={courses} />
      </div>
    </div>
  );
}