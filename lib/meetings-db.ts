import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Brother Johnson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 173, title: 'While of These Emblems We Partake' },
    speakers: [
      { name: 'Various Members', topic: 'Testimonies', type: 'speaker' }
    ],
    closingHymn: { number: 152, title: 'God Be With You Till We Meet Again' },
    closingPrayer: 'Sister Clark',
    announcements: ['Youth activity: May 12']
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Sister Adams',
    wardBusiness: [{ description: 'Release of Elders Quorum secretary' }],
    stakeBusiness: false,
    sacramentHymn: { number: 180, title: 'Father in Heaven, We Do Believe' },
    speakers: [
      { name: 'Brother Lee', topic: 'Service and Charity', type: 'speaker' },
      { name: 'Primary Children', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 220, title: 'Lord, I Would Follow Thee' },
    closingPrayer: 'Brother Thompson',
    announcements: ['Ward picnic: May 24']
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'stake',
    presiding: 'Stake President Johnson',
    conducting: 'Counselor Miller',
    openingHymn: { number: 26, title: 'Joseph Smith’s First Prayer' },
    openingPrayer: 'Brother Garcia',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 195, title: 'How Great the Wisdom and the Love' },
    speakers: [
      { name: 'Stake President Johnson', topic: 'Strengthening Families', type: 'speaker' },
      { name: 'Stake Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 5, title: 'High on the Mountain Top' },
    closingPrayer: 'Sister Evans',
    announcements: ['Stake conference next Sunday']
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'general',
    presiding: 'President Nelson',
    conducting: 'Elder Holland',
    openingHymn: { number: 1, title: 'The Morning Breaks' },
    openingPrayer: 'Elder Uchtdorf',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 183, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'President Nelson', topic: 'Faith and Revelation', type: 'speaker' },
      { name: 'Tabernacle Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 201, title: 'Joy to the World' },
    closingPrayer: 'Elder Bednar',
    announcements: ['General Conference rebroadcast next week']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}
