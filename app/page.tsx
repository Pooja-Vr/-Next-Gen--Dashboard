import { supabase } from '@/lib/supabase';
import { Course } from '@/types/database.types';
import DashboardContainer from '@/components/DashboardContainer';

export const revalidate = 0;

async function getCourses(): Promise<Course[]> {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error("Supabase API Error:", error.message);
      return [];
    }
    return data as Course[] || [];
  } catch (err: any) {
    console.error("Fetch Exception caught:", err.message);
    return [];
  }
}

export default async function DashboardPage() {
  const courses = await getCourses();
  // Pass dynamic database down to client controller
  return <DashboardContainer courses={courses} />;
}