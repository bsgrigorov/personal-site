import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The content you are looking for cannot be found.',
};

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="error-code">404</div>
      <h1>Page Not Found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="button">
        Return Home
      </Link>
    </div>
  );
}
