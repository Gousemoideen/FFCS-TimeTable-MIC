import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Saved Timetables | VIT Chennai FFCS Timetable Planner",
  description: "Access, compare, and share your saved VIT Chennai FFCS timetables.",
  alternates: {
    canonical: "/saved",
  },
};

export default function SavedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
