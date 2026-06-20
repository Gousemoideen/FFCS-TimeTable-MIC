import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Meet the Team | MIC VIT Chennai FFCS Timetable Planner",
  description: "Learn about the developers and designers from Microsoft Innovations Club (MIC) who built the VIT Chennai FFCS timetable planner.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
