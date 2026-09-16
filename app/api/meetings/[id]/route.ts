import { getMeetingById } from '../../../../lib/meetings-db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idString } = await params;   // ✅ await params
  const id = Number(idString);

  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
  }

  const meeting = getMeetingById(id);

  if (!meeting) {
    return new Response(JSON.stringify({ error: 'Meeting not found' }), { status: 404 });
  }

  return Response.json(meeting);
}
