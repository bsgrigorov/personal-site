'use client';

import Link from 'next/link';

import Badge from '@/components/Certifications/Badge';
import { useSearchHighlight } from '@/components/Search/useSearchHighlight';
import certifications from '@/data/certifications';

import PageWrapper from '../components/PageWrapper';

export default function CertificationsPage() {
  useSearchHighlight();

  return (
    <PageWrapper>
      <article className="post" id="certifications">
        <header>
          <div className="title">
            <h2 data-testid="heading">
              <Link href="/certifications">Certifications</Link>
            </h2>
          </div>
        </header>
        <div className="certifications-grid">
          {certifications.map((badge, idx) => (
            <Badge data={badge} key={badge.label} id={`cert-${idx}`} />
          ))}
        </div>
      </article>
    </PageWrapper>
  );
}
