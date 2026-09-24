'use client';

import { useActionState } from 'react';
import { createMeeting, type State } from '@/lib/actions';

const initialState: State = { errors: {}, message: '' };

export default function CreateMeetingPage() {
  const [state, formAction, isPending] = useActionState(createMeeting, initialState);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create Sacrament Meeting</h1>

      <form action={formAction} className="space-y-4">
        {/* Date */}
        <div>
          <label htmlFor="date" className="block font-medium">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            className="border rounded w-full p-2"
            aria-describedby="date-error"
          />
          <p id="date-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.date?.join(', ')}
          </p>
        </div>

        {/* Presiding */}
        <div>
          <label htmlFor="presiding" className="block font-medium">Presiding</label>
          <input
            id="presiding"
            name="presiding"
            type="text"
            className="border rounded w-full p-2"
            aria-describedby="presiding-error"
          />
          <p id="presiding-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.presiding?.join(', ')}
          </p>
        </div>

        {/* Conducting */}
        <div>
          <label htmlFor="conducting" className="block font-medium">Conducting</label>
          <input
            id="conducting"
            name="conducting"
            type="text"
            className="border rounded w-full p-2"
            aria-describedby="conducting-error"
          />
          <p id="conducting-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.conducting?.join(', ')}
          </p>
        </div>

        {/* Opening Hymn */}
        <div>
          <label htmlFor="openingHymn" className="block font-medium">Opening Hymn</label>
          <input
            id="openingHymn"
            name="openingHymn"
            type="text"
            className="border rounded w-full p-2"
            aria-describedby="openingHymn-error"
          />
          <p id="openingHymn-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.openingHymn?.join(', ')}
          </p>
        </div>

        {/* Sacrament Hymn */}
        <div>
          <label htmlFor="sacramentHymn" className="block font-medium">Sacrament Hymn</label>
          <input
            id="sacramentHymn"
            name="sacramentHymn"
            type="text"
            className="border rounded w-full p-2"
            aria-describedby="sacramentHymn-error"
          />
          <p id="sacramentHymn-error" aria-live="polite" className="text-red-600 text-sm">
            {state.errors?.sacramentHymn?.join(', ')}
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isPending ? 'Creating...' : 'Create Meeting'}
        </button>

        {/* General message */}
        {state.message && (
          <p aria-live="polite" className="mt-4 text-green-600">{state.message}</p>
        )}
      </form>
    </div>
  );
}
