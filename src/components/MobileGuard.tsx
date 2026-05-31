"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function MobileGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            
            // 1. Detect if the visitor is Googlebot or another search crawler
            const isBot = /googlebot|bingbot|slurp|duckduckbot|baiduspider/.test(userAgent);
            
            // 2. If it's a bot, always render the full layout so it can crawl and index everything
            if (isBot) {
                setShouldRender(true);
                return;
            }

            const isMobile = window.innerWidth < 768;

            if (isMobile && pathname !== "/mobile") {
                router.replace("/mobile");
                setShouldRender(false);
            } else if (!isMobile && pathname === "/mobile") {
                router.replace("/");
                setShouldRender(false);
            } else {
                setShouldRender(true);
            }
        };

        // Initial check
        checkScreenSize();

        // Listen to resize events
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [router, pathname]);

    if (!shouldRender) {
        // Tip: You can put a subtle loading spinner or your brand color here 
        // to make the transition look seamless to users while the redirect processes
        return <div className="min-h-screen bg-white"></div>; 
    }

    return <>{children}</>;
}