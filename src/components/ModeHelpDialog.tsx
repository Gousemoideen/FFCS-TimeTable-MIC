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
            <div className="relative w-full max-w-md overflow-hidden rounded-[24px] bg-[#FFF8E7] shadow-[0_24px_70px_rgba(74,54,30,0.18)] border border-[#eadcc5] animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center gap-3 px-6 py-5 bg-white/50 border-b border-[#eadcc5]/70">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3B5BDB]/10 text-[#3B5BDB]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">How it works</h3>
                    <button 
                        onClick={onClose}
                        className="ml-auto text-gray-400 hover:text-gray-900 transition-colors p-1.5 hover:bg-gray-100/50 rounded-lg"
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
                                <div className="h-2.5 w-2.5 rounded-full bg-[#3B5BDB]"></div>
                                <h4 className="font-extrabold text-[15px] text-gray-900 uppercase tracking-wider">
                                    {section.title}
                                </h4>
                            </div>
                            <p className="text-[14px] font-semibold leading-relaxed text-gray-700 pl-4 border-l-2 border-[#D0D5F2] ml-1.5">
                                {section.description}
                            </p>
                        </div>
                    ))}
                    
                    {/* Action Button */}
                    <div className="pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full rounded-xl bg-[#3B5BDB] py-3.5 text-[15px] font-extrabold text-white shadow-lg shadow-[#3B5BDB]/25 transition-all hover:bg-[#2B4BCE] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB]"
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

