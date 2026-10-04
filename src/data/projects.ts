import { Project } from '@/components/Projects/Cell';

const data: Project[] = [
  {
    title: 'SynKube — secure cloud platform',
    image: '/images/projects/synkube.jpg',
    date: '2024-06-01',
    link: 'https://synkube.com',
    desc:
      'Multi-cloud Kubernetes platform: infrastructure as code, GitOps delivery, and security built in from CI through production.',
  },
  {
    title: 'Agent Platform',
    image: '/images/projects/agent-platform.jpg',
    date: '2026-01-01',
    link: 'https://synkube.com/agents',
    desc:
      'Hermes AI agents platform with context, skills, bootstrap, and memory management. GitHub auth broker and identity broker for ephemeral GitHub and cloud IAM access.',
  },
  {
    title: 'Algorand Global x402 Challenge',
    image: '/images/projects/x402.jpg',
    date: '2026-01-01',
    link: 'https://x402.darkhold.dev',
    desc:
      'News aggregation API with x402 agentic payments via USDC. Deployed on Cloudflare Workers, D1, and Algorand Mainnet.',
  },
  {
    title: 'Agent knowledge base & skills registry',
    image: '/images/projects/agent-kb.jpg',
    date: '2025-06-01',
    desc:
      'Personal knowledge base and curated agent skills for multi-agent delivery and engineering velocity.',
  },
  {
    title: 'EVM Blockchain Indexer',
    image: '/images/projects/evm-indexer.jpg',
    date: '2024-06-01',
    link: 'https://github.com/synkube/app/tree/main/golang/evm-indexer',
    desc:
      'Concurrent EVM indexer in Go with PostgreSQL and ClickHouse storage, GraphQL API, and GoReleaser packaging.',
  },
  {
    title: 'ICP Tokens',
    image: '/images/projects/icptokens.png',
    date: '2024-11-01',
    link: 'https://icptokens.net',
    desc:
      'Trade analysis site for tokens on the ICP blockchain. Kubernetes on DigitalOcean with TimescaleDB and Node.js apps.',
  },
  {
    title: 'Zsh Environment Config',
    image: '/images/projects/zsh.jpg',
    date: '2022-02-01',
    link: 'https://github.com/bsgrigorov/zsh-env',
    desc:
      'Reproducible zsh setup with shell optimizations, aliasing, autocompletion, and custom functions for terminal productivity.',
  },
  {
    title: 'encrypt-decrypt.me',
    image: '/images/projects/encrypt.jpg',
    date: '2021-09-01',
    link: 'https://bsgrigorov.github.io/text-encrypt/',
    desc:
      'Client-side password encryption in the browser using OpenSSL AES-256. JavaScript and Web Crypto; data never leaves the device.',
  },
  {
    title: 'Pingdom Python Config',
    image: '/images/projects/pingdom.jpg',
    date: '2021-07-01',
    link: 'https://github.com/bsgrigorov/pingdom-python-config',
    desc:
      'Declarative Pingdom check management via API 3.1. Python tooling to define monitors as config instead of click-ops.',
  },
  {
    title: 'Read Easy',
    image: '/images/projects/readeasy.jpg',
    date: '2017-11-20',
    desc:
      'Cross-platform mobile app (Ionic, AngularJS, Node.js) for graded English reading. Personalized word models from thesis work to match texts to proficiency.',
  },
  {
    title: 'Language Learning',
    image: '/images/projects/language-learning.jpeg',
    date: '2016-04-20',
    desc:
      'Desktop app estimating reading proficiency and recommending articles. Python, NLP, JavaFX, and statistics; honours dissertation topic.',
  },
];

export default data;
