import type { ReactNode } from 'react';
import { slugify } from '@/utils/slugify';

interface HeadingWithIdProps {
  children: ReactNode;
}

/** H1 with auto-generated ID for anchor navigation */
export const H1WithId = ({ children }: HeadingWithIdProps) => {
  const text = typeof children === 'string' ? children : String(children);
  return (
    <h1 id={slugify(text)} style={{ scrollMarginTop: '5rem' }}>
      {children}
    </h1>
  );
};

/** H2 with auto-generated ID for anchor navigation */
export const H2WithId = ({ children }: HeadingWithIdProps) => {
  const text = typeof children === 'string' ? children : String(children);
  return (
    <h2 id={slugify(text)} style={{ scrollMarginTop: '5rem' }}>
      {children}
    </h2>
  );
};

/** H3 with auto-generated ID for anchor navigation */
export const H3WithId = ({ children }: HeadingWithIdProps) => {
  const text = typeof children === 'string' ? children : String(children);
  return (
    <h3 id={slugify(text)} style={{ scrollMarginTop: '5rem' }}>
      {children}
    </h3>
  );
};
