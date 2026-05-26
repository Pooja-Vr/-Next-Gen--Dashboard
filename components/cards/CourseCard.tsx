import { motion } from 'framer-motion';
import { Course } from '@/types/database.types';
import * as Icons from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  // Dynamically resolve icon component based on string name from DB
  const IconComponent = (Icons as any)[course.icon_name] || Icons.BookOpen;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Spring requirement met
      className="group relative p-6 bg-zinc-900 rounded-3xl bento-glow flex flex-col justify-between h-52 overflow-hidden cursor-pointer border border-transparent hover:border-purple-500/20 transition-colors duration-300"
    >
      {/* Background Subtle Gradient Grain */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-pink-500/5 opacity-40 pointer-events-none" />

      <div className="flex justify-between items-start z-10">
        <div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-800 text-purple-400 group-hover:text-purple-300 transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 bg-zinc-950 px-2 py-1 rounded-md border border-zinc-800/50 uppercase">
          Enrolled
        </span>
      </div>

      <div className="z-10 mt-4">
        <h3 className="font-bold text-zinc-200 text-lg line-clamp-1 group-hover:text-white transition-colors">
          {course.title}
        </h3>
        
        <div className="mt-4">
          <div className="flex justify-between text-xs text-zinc-400 mb-1.5 font-medium">
            <span>Course Progress</span>
            <span className="font-mono text-purple-400">{course.progress}%</span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/40">
            {/* Animated progress fill from 0 to database value */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}