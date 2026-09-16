import MeetingDetail from '../../../components/MeetingDetail';

async function getMeeting(id: string) {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(new URL(`/api/meetings/${id}`, baseUrl), { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function MeetingDetailPage({ params }: { params: { id: string } }) {
  const meeting = await getMeeting(params.id);

  if (!meeting) {
    return <p className="text-red-500">Meeting not found.</p>;
  }

  return <MeetingDetail meeting={meeting} />;
}
