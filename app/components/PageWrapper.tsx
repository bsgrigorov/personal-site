'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import SideBar from '@/components/Template/SideBar';

interface PageWrapperProps {
  children: ReactNode;
  fullPage?: boolean;
}

export default function PageWrapper({ children, fullPage = false }: PageWrapperProps) {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <main id="main">{children}</main>
      {!fullPage && <SideBar />}
    </>
  );
}
