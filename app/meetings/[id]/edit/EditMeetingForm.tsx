'use client';

import { useActionState } from 'react';
import { updateMeeting, type State } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

const initialState: State = { errors: {}, message: '' };

export default function EditMeetingForm({ meeting }: { meeting: SacramentMeeting }) {
  const [state, formAction, isPending] = useActionState(
    updateMeeting.bind(null, String(meeting.id)),
    initialState
  );

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Sacrament Meeting</h1>
      <form action={formAction} className="space-y-4">
        {[
          ['date', 'Date', 'date', meeting.date],
          ['presiding', 'Presiding', 'text', meeting.presiding],
          ['conducting', 'Conducting', 'text', meeting.conducting],
          ['openingHymn', 'Opening Hymn', 'text', meeting.openingHymn.title],
          ['sacramentHymn', 'Sacrament Hymn', 'text', meeting.sacramentHymn.title],
        ].map(([name, label, type, value]) => {
          const field = name as keyof NonNullable<State['errors']>;
          const errorId = `${name}-error`;
          return (
            <div key={name}>
              <label htmlFor={name} className="block font-medium">{label}</label>
              <input id={name} name={name} type={type} defaultValue={value} className="border rounded w-full p-2" aria-describedby={errorId} />
              <p id={errorId} aria-live="polite" className="text-red-600 text-sm">{state.errors?.[field]?.join(', ')}</p>
            </div>
          );
        })}
        <button type="submit" disabled={isPending} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {isPending ? 'Updating...' : 'Update Meeting'}
        </button>
        {state.message && <p aria-live="polite" className="mt-4 text-red-600">{state.message}</p>}
      </form>
    </div>
  );
}