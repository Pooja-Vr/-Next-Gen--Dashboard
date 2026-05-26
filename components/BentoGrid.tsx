import { motion, Variants } from 'framer-motion';
import type { Course } from '@/types/database.types';
import HeroCard from './cards/HeroCard';
import CourseCard from './cards/CourseCard';
import ActivityCard from './cards/ActivityCard'; 

interface BentoGridProps {
  courses: Course[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 200, damping: 22 } 
  }
};

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto w-full mb-20 md:mb-0"
    >
      {/* Hero tile */}
      <motion.div variants={itemVariants} className="lg:col-span-2 min-h-[240px]">
        <HeroCard />
      </motion.div>

      {/*activity tile*/}
      <motion.div variants={itemVariants}>
        <ActivityCard />
      </motion.div>

      {/* Dynamic Course Tiles */}
      {courses.map((course) => (
        <motion.div key={course.id} variants={itemVariants}>
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.main>
  );
}