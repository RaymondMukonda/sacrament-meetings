import { redirect } from 'next/navigation';

export default async function CurrentMeetingPage() {
	const today = new Date();
	const sunday = new Date(today);
	sunday.setDate(today.getDate() - today.getDay());
	const isoDate = sunday.toISOString().split('T')[0];

	const baseUrl = process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}`
		: process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

	const res = await fetch(
		new URL(`/api/meetings?date=${isoDate}`, baseUrl),
		{ cache: 'no-store' }
	);
	const meetings = await res.json();

	if (meetings.length > 0) {
		redirect(`/meetings/${meetings[0].id}`);
	}

	redirect('/meetings');
}
