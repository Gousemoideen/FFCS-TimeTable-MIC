import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Create Timetable Grid | VIT Chennai FFCS Timetable Planner",
  description: "Generate, visualize, and edit your clash-free VIT Chennai FFCS timetable grid. Compare schedules and export your final layout.",
  alternates: {
    canonical: "/timetable",
  },
};

export default function TimetableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
