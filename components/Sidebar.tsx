"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, BarChart3, Settings } from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'courses', label: 'My Courses', icon: BookOpen },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <aside className="hidden md:flex flex-col bg-zinc-950 border-r border-zinc-900 h-screen sticky top-0 p-4 lg:w-64 md:w-20 transition-all duration-300 z-40">
        <div className="mb-8 px-4 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hidden lg:block tracking-wider">
          NEXT-GEN ED
        </div>
        
        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="relative flex items-center gap-4 px-4 py-3 text-sm font-medium rounded-xl transition-colors text-zinc-400 hover:text-zinc-200 w-full text-left group"
              >
                {/* Smooth Background Highlight Snapping */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-purple-950/50 to-pink-950/30 border border-purple-500/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-5 h-5 z-10 transition-colors ${isActive ? 'text-purple-400' : 'group-hover:text-zinc-300'}`} />
                <span className="z-10 hidden lg:block">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation Bar (< 768px) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-zinc-950/80 backdrop-blur-md border-t border-zinc-900 flex justify-around items-center z-50 px-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative p-3 text-zinc-400"
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicatorMobile"
                  className="absolute inset-0 bg-purple-500/10 rounded-xl blur-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <Icon className={`w-6 h-6 z-10 ${isActive ? 'text-purple-400' : 'text-zinc-500'}`} />
            </button>
          );
        })}
      </nav>
    </>
  );
}