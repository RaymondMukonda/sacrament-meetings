import { getMeetingById } from '@/lib/meetings-db';
import { notFound } from 'next/navigation';
import EditMeetingForm from './EditMeetingForm';

export default async function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (!Number.isInteger(id)) {
    notFound();
  }

  const meeting = await getMeetingById(id);

  if (!meeting) {
    notFound();
  }

  return <EditMeetingForm meeting={meeting} />;
}
