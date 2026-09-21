import MeetingCard from '../../components/MeetingCard';
import type { SacramentMeeting } from '../../lib/types';
import { getMeetings } from '../../lib/meetings-db';

export default async function MeetingsPage() {
  const meetings: SacramentMeeting[] = await getMeetings();

  return (
    <div className="grid gap-4">
      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
}