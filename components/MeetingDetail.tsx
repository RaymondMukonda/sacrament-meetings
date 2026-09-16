import type { SacramentMeeting } from '../lib/types';

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{meeting.date} — {meeting.meetingType}</h2>
      <p><strong>Presiding:</strong> {meeting.presiding}</p>
      <p><strong>Conducting:</strong> {meeting.conducting}</p>

      {meeting.announcements && (
        <div>
          <h3 className="font-semibold">Announcements</h3>
          <ul className="list-disc pl-6">
            {meeting.announcements.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      )}

      <p><strong>Opening Hymn:</strong> {meeting.openingHymn.number} — {meeting.openingHymn.title}</p>
      <p><strong>Opening Prayer:</strong> {meeting.openingPrayer}</p>

      <div>
        <h3 className="font-semibold">Ward Business</h3>
        <ul className="list-disc pl-6">
          {meeting.wardBusiness.map((b, i) => <li key={i}>{b.description}</li>)}
        </ul>
      </div>

      {meeting.stakeBusiness && <p><strong>Stake Business:</strong> Yes</p>}

      <p><strong>Sacrament Hymn:</strong> {meeting.sacramentHymn.number} — {meeting.sacramentHymn.title}</p>

      <div>
        <h3 className="font-semibold">Speakers & Musical Numbers</h3>
        <ul className="list-disc pl-6">
          {meeting.speakers.map((s, i) => (
            <li key={i}>
              {s.type === 'speaker' ? `${s.name} — ${s.topic}` : `${s.name} (Musical Number)`}
            </li>
          ))}
        </ul>
      </div>

      <p><strong>Closing Hymn:</strong> {meeting.closingHymn.number} — {meeting.closingHymn.title}</p>
      <p><strong>Closing Prayer:</strong> {meeting.closingPrayer}</p>
    </div>
  );
}
