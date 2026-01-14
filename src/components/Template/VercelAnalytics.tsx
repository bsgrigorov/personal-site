'use client';

import { Analytics } from '@vercel/analytics/react';

const VercelAnalytics = () => {
  // Cache the exclusion flag once on initial load
  const isExcluded =
    typeof window !== 'undefined' &&
    localStorage.getItem('excludeAnalytics') === 'true';

  return (
    <Analytics
      beforeSend={(event) => (isExcluded ? null : event)}
    />
  );
};

export default VercelAnalytics;
