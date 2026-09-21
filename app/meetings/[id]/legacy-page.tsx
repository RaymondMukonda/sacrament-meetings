import MeetingDetail from '../../../components/MeetingDetail';
import { getMeetingById } from '../../../lib/meetings-db';
import type { SacramentMeeting } from '../../../lib/types';

export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (!Number.isInteger(id)) {
    return <p className="text-red-500">Meeting not found.</p>;
  }

  const meeting: SacramentMeeting | null = await getMeetingById(id);

  if (!meeting) {
    return <p className="text-red-500">Meeting not found.</p>;
  }

  return <MeetingDetail meeting={meeting} />;
}