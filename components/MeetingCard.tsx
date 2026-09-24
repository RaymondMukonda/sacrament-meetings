'use client';

import Link from 'next/link';
import { deleteMeeting } from '@/lib/actions';
import type { SacramentMeeting } from '../lib/types';

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h2 className="text-lg font-bold">
        {meeting.date} – {meeting.meetingType}
      </h2>
      <p>Presiding: {meeting.presiding}</p>
      <p>Conducting: {meeting.conducting}</p>

      <div className="flex gap-4 mt-3">
        {/* View Details */}
        <Link
          href={`/meetings/${meeting.id}`}
          className="text-[var(--color-primary)] underline"
        >
          View Details
        </Link>

        {/* Edit */}
        <Link
          href={`/meetings/${meeting.id}/edit`}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Edit
        </Link>

        {/* Delete */}
        <form action={deleteMeeting.bind(null, String(meeting.id))}>
          <button
            type="submit"
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
