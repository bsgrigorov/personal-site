import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { StatData } from '@/components/Stats/types';
import { siteConfig } from '@/data/config';
import packageJson from '../../../package.json';

dayjs.extend(relativeTime);

const { repoUrl } = siteConfig.github;

// Deployment stats
const deploymentStats: StatData[] = [
  {
    label: 'Version',
    value: `v${packageJson.version}`,
    link: `${repoUrl}/releases`,
  },
  {
    label: 'Theme',
    value: 'Cyberpunk',
  },
  {
    label: 'Last commit',
    key: 'pushed_at',
    link: `${repoUrl}/commits/main`,
    format: (x) => dayjs(x as string).fromNow(),
  },
  {
    label: 'Prod envs brought down',
    value: '0',
  },
  {
    label: 'Prod envs restored',
    value: '3',
  },
];

// Tech stack
const techStack: StatData[] = [
  {
    label: 'Framework',
    value: 'Next.js 16',
    link: 'https://nextjs.org',
  },
  {
    label: 'Language',
    value: 'TypeScript',
    link: 'https://www.typescriptlang.org',
  },
  {
    label: 'Styling',
    value: 'SCSS',
    link: 'https://sass-lang.com',
  },
  {
    label: 'Package manager',
    value: 'pnpm',
    link: 'https://pnpm.io',
  },
  {
    label: 'Bundler',
    value: 'Turbopack',
    link: 'https://turbo.build/pack',
  },
  {
    label: 'Hosting',
    value: 'Vercel',
    link: 'https://vercel.com',
  },
  {
    label: 'IDE',
    value: 'Cursor',
    link: 'https://cursor.com',
  },
];

const data: StatData[] = [...deploymentStats, ...techStack];

export default data;
