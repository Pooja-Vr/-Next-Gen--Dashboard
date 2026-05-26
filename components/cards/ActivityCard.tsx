// "use client";
// import { BarChart3 } from 'lucide-react';

// export default function ActivityCard() {
//   // Mock array for contribution metrics grid blocks
//   const blocks = Array.from({ length: 28 }, (_, i) => {
//     // Generate mock random opacity heights for heatmap look
//     const opacities = ['bg-purple-950/40', 'bg-purple-900/40', 'bg-purple-700/60', 'bg-purple-500', 'bg-pink-500'];
//     return opacities[Math.floor(Math.random() * opacities.length)];
//   });

//   return (
//     <div className="bg-zinc-900 rounded-3xl p-6 bento-glow flex flex-col justify-between min-h-[240px] border border-zinc-800/40 relative overflow-hidden">
//       <div className="flex justify-between items-center z-10">
//         <h4 className="font-bold text-zinc-300 text-sm tracking-wide uppercase font-mono">Activity Metrics</h4>
//         <BarChart3 className="w-4 h-4 text-pink-500" />
//       </div>
      
//       {/* Micro Heatmap Grid */}
//       <div className="my-4 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/60 flex flex-col justify-between gap-3 z-10">
//         <div className="grid grid-cols-7 gap-1.5 justify-items-center">
//           {blocks.map((bgClass, idx) => (
//             <div 
//               key={idx} 
//               className={`w-full aspect-square rounded-[4px] border border-zinc-900/50 transition-all duration-500 ${bgClass} hover:scale-110 hover:shadow-[0_0_8px_rgba(168,85,247,0.4)] cursor-crosshair`}
//             />
//           ))}
//         </div>
//         <div className="flex justify-between text-[10px] font-mono text-zinc-500 px-0.5">
//           <span>Less</span>
//           <span>More</span>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useMemo } from 'react';
import { BarChart3 } from 'lucide-react';

export default function ActivityCard() {
  // Array matrix of pre-defined background levels to match heatmaps 
  // Isse component completely PURE ban jata hai aur Math.random render body se bahar rehta hai
  const blocks = useMemo(() => {
    const opacities = [
      'bg-purple-950/40', 'bg-purple-900/40', 'bg-purple-700/60', 'bg-purple-500', 'bg-pink-500',
      'bg-purple-900/40', 'bg-purple-950/40', 'bg-purple-500', 'bg-purple-700/60', 'bg-pink-500'
    ];
    
    // 28 blocks ke liye ek static seed matrix map bana rahe hain
    return Array.from({ length: 28 }, (_, i) => {
      // Kisi bhi logic se bina Math.random ke random pseudo patterns create karna:
      const pseudoRandomIndex = (i * 7 + 3) % opacities.length;
      return opacities[pseudoRandomIndex];
    });
  }, []);

  return (
    <div className="bg-zinc-900 rounded-3xl p-6 bento-glow flex flex-col justify-between min-h-[240px] border border-zinc-800/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="flex justify-between items-center z-10">
        <h4 className="font-bold text-zinc-300 text-sm tracking-wide uppercase font-mono">Activity Metrics</h4>
        <BarChart3 className="w-4 h-4 text-pink-500" />
      </div>
      
      {/* Micro Heatmap Grid */}
      <div className="my-4 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/60 flex flex-col justify-between gap-3 z-10">
        <div className="grid grid-cols-7 gap-1.5 justify-items-center">
          {blocks.map((bgClass, idx) => (
            <div 
              key={idx} 
              className={`w-full aspect-square rounded-[4px] border border-zinc-900/50 transition-all duration-300 ${bgClass} hover:scale-110 hover:shadow-[0_0_8px_rgba(168,85,247,0.4)] cursor-crosshair`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] font-mono text-zinc-500 px-0.5">
          <span>Less</span>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}