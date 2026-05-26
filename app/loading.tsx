export default function Loading() {
  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
      <div className="w-16 md:w-64 bg-[#0a0a0a] border-r border-neutral-800 p-4 space-y-4" />
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="md:col-span-3 h-48 bg-[#0f0f0f] rounded-2xl border border-neutral-800 animate-pulse" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-44 bg-[#0f0f0f] rounded-2xl border border-neutral-800 animate-pulse" />
          ))}
        </div>
      </main>
    </div>
  );
}