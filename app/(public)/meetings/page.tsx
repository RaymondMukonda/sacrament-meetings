import { getMeetings, getMeetingsTotalPages } from '../../../lib/meetings-db';
import MeetingCard from '../../../components/MeetingCard';
import type { SacramentMeeting } from '../../../lib/types';
import { Pagination } from '@/components/Pagination';
import { MeetingSearch } from '@/components/MeetingSearch';

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  // Await the searchParams promise before using it without this we get those errors
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <div className="space-y-4">
      <MeetingSearch />
      <div className="grid gap-4">
        {meetings.map((meeting: SacramentMeeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
