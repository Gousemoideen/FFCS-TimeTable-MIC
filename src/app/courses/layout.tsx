import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Select Courses | VIT Chennai FFCS Timetable Planner",
  description: "Select courses and theory/lab slots for your VIT Chennai FFCS schedule. Build your list of preferred subjects.",
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
