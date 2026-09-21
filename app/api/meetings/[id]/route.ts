import { getMeetingById } from '../../../../lib/meetings-db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
  }

  // Await the async database call
  const meeting = await getMeetingById(id);

  if (!meeting) {
    return new Response(JSON.stringify({ error: 'Meeting not found' }), { status: 404 });
  }

  return Response.json(meeting);
}

