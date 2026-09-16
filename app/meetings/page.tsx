import MeetingCard from '../../components/MeetingCard';
import type { SacramentMeeting } from '../../lib/types';

async function getMeetings(): Promise<SacramentMeeting[]> {
  const res = await fetch('http://localhost:3000/api/meetings', { cache: 'no-store' });
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
