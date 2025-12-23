'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          {/* Using regular img to match original styling - static export doesn't benefit from next/image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/me.jpg" alt="Borislav Grigorov" />
        </Link>
        <header>
          <h2>Borislav Grigorov</h2>
          <p>
            <a href="mailto:bobby+personal-website@synkube.com">bobby@synkube.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Bobby. I am a passionate and curious person. I studied CS and Physics at{' '}
          <a href="https://www.ubc.ca/">UBC</a>. I presently work at{' '}
          <a href="https://consensys.io/">Consensys</a> as a Sr DevSecOps Engineer and live in
          Seattle, WA.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Borislav Grigorov <Link href="/">bgrigorov.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
