import { useState } from 'react';
import Sidebar from './Sidebar';
import BentoGrid from './BentoGrid';
import { Course } from '@/types/database.types';

interface DashboardContainerProps {
    courses: Course[];
}

export default function DashboardContainer({ courses }: DashboardContainerProps) {
    const [activeTab, setActiveTab] = useState('dashboard');

    // Conditional rendering based on sidebar selection
    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <BentoGrid courses={courses} />;
            case 'courses':
                return (
                    <div className="p-8 max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6">My Enrolled Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Course cards only */}
                            {courses.map((course) => (
                                <div key={course.id} className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
                                    <h3 className="font-bold text-lg text-zinc-200">{course.title}</h3>
                                    <p className="text-sm text-purple-400 mt-2">Progress: {course.progress}%</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'analytics':
                return (
                    <div className="p-8 max-w-7xl mx-auto min-h-[calc(100vh-100px)] flex flex-col">
                        <h2 className="text-2xl font-bold mb-4">Detailed Analytics</h2>

                        <div className="flex-1 flex items-center justify-center">
                            <p className="text-zinc-400 text-center max-w-md">
                                404: Page not found!
                            </p>
                        </div>
                    </div>
                );
            case 'settings':
                return (
                    <div className="p-8 max-w-7xl mx-auto min-h-[calc(100vh-100px)] flex flex-col">
                        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>

                         <div className="flex-1 flex items-center justify-center">
                            <p className="text-zinc-400 text-center max-w-md">
                                404: Page not found!
                            </p>
                        </div>
                    </div>
                );
            default:
                return <BentoGrid courses={courses} />;
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-zinc-950 text-zinc-50 antialiased">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-1 overflow-y-auto">
                <header className="p-6 border-b border-zinc-900/50 flex justify-between items-center md:block hidden">
                    <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                        System Status: {activeTab}
                    </span>
                </header>
                {renderContent()}
            </div>
        </div>
    );
}