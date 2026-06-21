"use client";

import { useFeatureFlagEnabled } from 'posthog-js/react';
import React, { useEffect, useState } from 'react';

export default function MaintenanceGuard({ children }: { children: React.ReactNode }) {
    const isMaintenanceMode = useFeatureFlagEnabled('maintenance-mode');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by rendering children during SSR
    if (!mounted) {
        return <>{children}</>;
    }

    if (isMaintenanceMode) {
        return (
            <div className="min-h-screen bg-[#272262] flex items-center justify-center relative overflow-hidden font-sans">
                {/* Background Ellipse */}
                <div className="absolute w-[150vw] md:w-[1836px] h-[341px] bg-[#2B256B] -bottom-32 md:top-[650px] left-1/2 md:left-[-302px] -translate-x-1/2 md:translate-x-0 rotate-[-7.47deg] z-0 rounded-[100%] blur-[2px]"></div>
                
                <div className="max-w-6xl w-full mx-auto px-6 py-12 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
                    
                    {/* Left side: Illustration */}
                    <div className="w-full md:w-1/2 flex justify-center relative">
                        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
                            {/* The astronaut illustration goes here. */}
                            <img 
                                src="/astronaut.png" 
                                alt="Astronaut floating in space" 
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    // Fallback placeholder if the image isn't found yet
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement?.classList.add('bg-white/5', 'rounded-full', 'border', 'border-white/10');
                                    if (e.currentTarget.parentElement) {
                                        e.currentTarget.parentElement.innerHTML = '<div class="text-white/50 text-center p-6"><p class="font-bold mb-2">Illustration Placeholder</p><p class="text-sm">Save the astronaut image as "astronaut.png" and place it in the public/ folder.</p></div>';
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Right side: Text Content */}
                    <div 
                        className="flex flex-col items-start p-0 gap-4 md:ml-18 lg:ml-28"
                        style={{ width: '431px' }}
                    >
                        <h1 className="text-5xl md:text-[48px] font-bold text-white/60 leading-tight tracking-tight md:-tracking-[1px]" style={{ fontFamily: 'var(--font-heading), sans-serif', width: '431px' }}>
                            Maintenance Mode
                        </h1>
                        
                        <div className="border-l-[1px] border-white/60 pl-5 md:pl-6 flex flex-col gap-[10px] items-start border-solid" style={{ width: '431px' }}>
                            <p className="text-xl md:text-[24px] font-medium text-white/60 leading-[1.4] md:-tracking-[0.019em]">
                                We are adding new features: it will be operational really soon
                            </p>
                            <p className="text-lg md:text-[20px] font-medium text-white/60 leading-[1.4] md:-tracking-[0.017em]">
                                May the force be with you
                            </p>
                        </div>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes blob {
                        0% { transform: translate(0px, 0px) scale(1); }
                        33% { transform: translate(30px, -50px) scale(1.1); }
                        66% { transform: translate(-20px, 20px) scale(0.9); }
                        100% { transform: translate(0px, 0px) scale(1); }
                    }
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                        100% { transform: translateY(0px); }
                    }
                `}} />
            </div>
        );
    }

    // If the flag is false or still loading, render the normal application
    return <>{children}</>;
}
