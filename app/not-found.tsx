import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The content you are looking for cannot be found.',
};

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>
        Return <Link href="/">home</Link>.
      </p>
    </div>
  );
}
