'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  createMeetingDB,
  updateMeetingDB,
  deleteMeetingDB,
} from './meetings-db';
import type { Hymn } from './types';

// State returned by the Server Actions
export type State = {
  message?: string;
  errors?: {
    date?: string[];
    presiding?: string[];
    conducting?: string[];
    openingHymn?: string[];
    sacramentHymn?: string[];
  };
};

// Zod schema for validation
const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  presiding: z.string().min(1, 'Presiding leader is required'),
  conducting: z.string().min(1, 'Conducting leader is required'),
  openingHymn: z.string().min(1, 'Opening hymn is required'),
  sacramentHymn: z.string().min(1, 'Sacrament hymn is required'),
});

function toHymn(title: string): Hymn {
  return { number: 0, title };
}

// Create Meeting
export async function createMeeting(
  prevState: State,
  formData: FormData
): Promise<State> {
  const raw = Object.fromEntries(formData.entries());

  const parsed = MeetingFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      message: 'Please correct the errors below.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await createMeetingDB({
      ...parsed.data,
      meetingType: 'regular',
      openingHymn: toHymn(parsed.data.openingHymn),
      openingPrayer: '',
      wardBusiness: [],
      stakeBusiness: false,
      sacramentHymn: toHymn(parsed.data.sacramentHymn),
      speakers: [],
      closingHymn: { number: 0, title: '' },
      closingPrayer: '',
    });
  } catch (err) {
    console.error('Create meeting error:', err);
    throw new Error('Failed to create meeting. Please try again.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

// Update Meeting
export async function updateMeeting(
  id: string,
  prevState: State,
  formData: FormData
): Promise<State> {
  const raw = Object.fromEntries(formData.entries());

  const parsed = MeetingFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      message: 'Please correct the errors below.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const meetingId = Number(id);
    if (!Number.isInteger(meetingId)) {
      throw new Error('Invalid meeting ID');
    }

    await updateMeetingDB(meetingId, {
      date: parsed.data.date,
      presiding: parsed.data.presiding,
      conducting: parsed.data.conducting,
      openingHymn: toHymn(parsed.data.openingHymn),
      sacramentHymn: toHymn(parsed.data.sacramentHymn),
    });
  } catch (err) {
    console.error('Update meeting error:', err);
    throw new Error('Failed to update meeting. Please try again.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

// Delete Meeting
export async function deleteMeeting(id: string) {
  try {
    const meetingId = Number(id);
    if (!Number.isInteger(meetingId)) {
      throw new Error('Invalid meeting ID');
    }

    await deleteMeetingDB(meetingId);
  } catch (err) {
    console.error('Delete meeting error:', err);
    throw new Error('Failed to delete meeting. Please try again.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}