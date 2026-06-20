import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Give Feedback | VIT Chennai FFCS Timetable Planner",
  description: "Submit suggestions, report bugs, and share your feedback on the VIT Chennai FFCS Timetable Planner.",
  alternates: {
    canonical: "/feedback",
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
