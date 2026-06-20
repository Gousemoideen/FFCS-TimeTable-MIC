import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FFCS Slot View Map | VIT Chennai FFCS Timetable Planner",
  description: "View and analyze VIT Chennai FFCS theory and lab slot distributions. Visual representation of all slot combinations.",
  alternates: {
    canonical: "/slots",
  },
};

export default function SlotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
