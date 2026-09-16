import Link from 'next/link';
import type { SacramentMeeting } from '../lib/types';

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h2 className="text-lg font-bold">{meeting.date} — {meeting.meetingType}</h2>
      <p>Presiding: {meeting.presiding}</p>
      <p>Conducting: {meeting.conducting}</p>
      <Link href={`/meetings/${meeting.id}`} className="text-[var(--color-primary)] underline">
        View Details
      </Link>
    </div>
  );
}
