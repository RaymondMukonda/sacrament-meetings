import { redirect } from 'next/navigation';

export default async function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sunday
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const isoDate = sunday.toISOString().split('T')[0];

  const res = await fetch(`http://localhost:3000/api/meetings?date=${isoDate}`, { cache: 'no-store' });
  const meetings = await res.json();

  if (meetings.length > 0) {
    redirect(`/meetings/${meetings[0].id}`);
  } else {
    redirect('/meetings');
  }
}
