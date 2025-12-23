import dayjs from 'dayjs';

import { StatData } from '@/components/Stats/types';
import { siteConfig } from '@/data/config';

const { repoUrl } = siteConfig.github;

const data: StatData[] = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: `${repoUrl}/stargazers`,
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: `${repoUrl}/stargazers`,
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: `${repoUrl}/network`,
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0',
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: `${repoUrl}/issues`,
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: `${repoUrl}/commits`,
    format: (x) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {
    label: 'Lines of TypeScript powering this website',
    value: '2150',
    link: `${repoUrl}/graphs/contributors`,
  },
];

export default data;
