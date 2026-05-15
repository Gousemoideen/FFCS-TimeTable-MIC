'use client';

type ModeHelpSection = {
    title: string;
    description: string;
};

type ModeHelpDialogProps = {
    sections: ModeHelpSection[];
    onClose: () => void;
};

export default function ModeHelpDialog({ sections, onClose }: ModeHelpDialogProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300" 
                onClick={onClose}
            ></div>
            
            {/* Dialog Container */}
            <div className="relative w-full max-w-md overflow-hidden rounded-[24px] bg-[#F5E6D3] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center gap-3 px-6 py-5 bg-white/40 border-b border-white/40">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">How it works</h3>
                    <button 
                        onClick={onClose}
                        className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-7 space-y-6">
                    {sections.map((section) => (
                        <div key={section.title} className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                <h4 className="font-extrabold text-[17px] text-gray-900 uppercase tracking-tight">
                                    {section.title}
                                </h4>
                            </div>
                            <p className="text-[15px] leading-relaxed text-gray-700 pl-4 border-l-2 border-blue-100 ml-1">
                                {section.description}
                            </p>
                        </div>
                    ))}
                    
                    {/* Action Button */}
                    <div className="pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full rounded-xl bg-blue-600 py-4 text-[16px] font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
