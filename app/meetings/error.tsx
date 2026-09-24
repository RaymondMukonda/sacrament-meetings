'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong
      </h1>
      <p className="mb-6 text-gray-700">
        {error.message || 'An unexpected error occurred while loading meetings.'}
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
        <Link
          href="/meetings"
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Back to Meetings
        </Link>
      </div>
    </div>
  );
}
