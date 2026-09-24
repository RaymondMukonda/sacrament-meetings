'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Meeting not found
      </h1>
      <p className="mb-6 text-gray-700">
        The meeting you are looking for does not exist or may have been deleted.
      </p>
      <Link
        href="/meetings"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Meetings
      </Link>
    </div>
  );
}
