import type { Metadata } from 'next';

type Props = {
  params: Promise<{ shareId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { shareId } = await params;
  return {
    title: "Shared Timetable | VIT Chennai FFCS Timetable Planner",
    description: "View this shared VIT Chennai FFCS timetable schedule layout.",
    alternates: {
      canonical: `/share/${shareId}`,
    },
  };
}

export default function ShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
