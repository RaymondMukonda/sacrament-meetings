'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav aria-label="Pagination" className="flex items-center gap-4 mt-4">
      {currentPage > 1 && (
        <Link
          href={createPageURL(currentPage - 1)}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Previous
        </Link>
      )}
      <span className="font-medium">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
