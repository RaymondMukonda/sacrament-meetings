import MeetingDetail from '../../../components/MeetingDetail';

async function getMeeting(id: string) {
  const res = await fetch(`http://localhost:3000/api/meetings/${id}`, { cache: 'no-store' });
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
