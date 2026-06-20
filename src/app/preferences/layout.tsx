import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Timetable Preferences | VIT Chennai FFCS Timetable Planner",
  description: "Set your timetable preferences for VIT Chennai FFCS. Choose theory/lab slot priorities, school, and schedule constraints.",
  alternates: {
    canonical: "/preferences",
  },
};

export default function PreferencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
