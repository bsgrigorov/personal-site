'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import routes from '../../data/routes';
import Hamburger from './Hamburger';

const Navigation = () => {
  const pathname = usePathname();

  // Check if a route is active (handles both exact match and nested routes)
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <header id="header">
      <h1 className="index-link">
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.label} href={l.path} className={isActive(l.path) ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
      </h1>
      <nav className="links">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label} className={isActive(l.path) ? 'active' : ''}>
                <Link href={l.path}>{l.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Navigation;
