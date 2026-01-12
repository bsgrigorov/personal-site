'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/data/config';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image
            src="/images/me.jpg"
            alt={siteConfig.name}
            width={160}
            height={160}
            priority
          />
        </Link>
        <header>
          <h2>{siteConfig.name}</h2>
          <p>
            <a href={`mailto:${siteConfig.social.email}`}>{siteConfig.nickname.toLowerCase()}@synkube.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Building the decentralized future one wallet/block/rpc at a time. Web3 infra DevOps engineer bootstrapping k8s clusters,
          Terraform stacks, and GitOps pipelines. Currently powering{' '}
          <a href="https://metamask.io/">MetaMask</a> at{' '}
          <a href="https://consensys.io/">{siteConfig.company}</a>.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                View My Resume
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
          &copy; {siteConfig.name} <Link href="/">bgrigorov.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
