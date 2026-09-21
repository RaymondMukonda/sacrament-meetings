import { getMeetings } from '../../../lib/meetings-db';

export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get('date') ?? '';
  // Await the async database call
  const meetings = await getMeetings(date);
  return Response.json(meetings);
}
