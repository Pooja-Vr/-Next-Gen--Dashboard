import { Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroCard() {
  return (
    <div className="p-8 bg-zinc-900 rounded-3xl bento-glow flex flex-col justify-between h-full relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-950/20 border border-zinc-800/40">
      {/* Tech Grain Highlight overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Welcome back, Pooja Verma!
        </h1>
        <p className="text-zinc-400 text-sm mt-2 max-w-md leading-relaxed">
          Track your learning milestones, review real-time database courses, and scale your full-stack expertise with interactive system nodes.        </p>
      </div>

      <div className="mt-8 md:mt-0 flex items-center gap-3 bg-zinc-950/80 w-fit px-4 py-2.5 rounded-2xl border border-zinc-800/60 shadow-lg">
        {/* Animated Flame Icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
        </motion.div>
        <span className="text-xs font-semibold text-zinc-300 font-mono tracking-wide">
          5 DAY LEARNING STREAK! 
        </span>
      </div>
    </div>
  );
}