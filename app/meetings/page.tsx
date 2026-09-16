import MeetingCard from '../../components/MeetingCard';
import type { SacramentMeeting } from '../../lib/types';

async function getMeetings(): Promise<SacramentMeeting[]> {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(new URL('/api/meetings', baseUrl), { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function MeetingsPage() {
  const meetings: SacramentMeeting[] = await getMeetings();

  return (
    <div className="grid gap-4">
      {meetings.map((m) => (
        <MeetingCard key={m.id} meeting={m} />
      ))}
    </div>
  );
}
