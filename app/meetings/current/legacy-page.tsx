import { redirect } from 'next/navigation';

export default async function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const isoDate = sunday.toISOString().split('T')[0];
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(
    new URL(`/api/meetings?date=${isoDate}`, baseUrl),
    { cache: 'no-store' }
  );
  const meetings = await res.json();

  if (meetings.length > 0) {
    redirect(`/meetings/${meetings[0].id}`);
  } else {
    redirect('/meetings');
  }
}