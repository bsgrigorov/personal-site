// TODO Add a couple lines about each project
const data = [
  {
    title: 'SynKube - Kubernetes on GCP',
    subtitle: 'IaC for Kubernetes, Application Deployment and CICD on GCP and DigitalOcean',
    image: '/images/projects/synkube.png',
    date: '2025-06-01',
    link: 'https://github.com/synkube',
    desc:
      'Created a complete k8s platform on GCP and DigitalOcean with Terraform, ArgoCD, helmfile, Teleport, and GH Actions. Developed starter repos and pipelines that build, test, dockerize and deploy Golang, Node.js and Python apps.',
  },
  {
    title: 'ICP Tokens',
    subtitle: 'Website for trade analysis of tokens on ICP blockchain',
    image: '/images/projects/icptokens.png',
    date: '2024-11-01',
    link: 'https://icptokens.net',
    desc:
      'Website for trade analysis of tokens on ICP blockchain. Deployed kubernetes infra on DigitalOcean including TimescaleDB and Node.js apps.',
  },
  {
    title: 'EVM Blockchain Indexer',
    subtitle: 'Concurrent blockchain indexer in Golang',
    image: '/images/projects/evm-indexer.png',
    date: '2024-06-01',
    link: 'https://github.com/synkube/app',
    desc:
      'Developed a concurrent blockchain indexer (EVM) in Golang. Used Postgres and Clickhouse for storage and GraphQL to expose the data. Packaged with goreleaser.',
  },
  {
    title: 'Zsh Environment Config',
    subtitle: 'Environment configuration for zsh shell',
    image: '/images/projects/zsh.png',
    date: '2022-02-01',
    link: 'https://github.com/bsgrigorov/zsh-env',
    desc:
      'Generated a reproducible zsh environment with shell optimizations, aliasing, autocompletion, and custom functions for increasing terminal productivity.',
  },
  {
    title: 'encrypt-decrypt.me',
    subtitle: 'Website for OpenSSL AES256 encryption of data using passwords',
    image: '/images/projects/encrypt.png',
    date: '2021-09-01',
    link: 'https://bsgrigorov.github.io/text-encrypt/',
    desc:
      'Created a client-side secure password encryption website that implements OpenSSL aes256 standard. Used JavaScript, OpenSSL and encryption algorithms.',
  },
  {
    title: 'Pingdom Python Config',
    subtitle: 'Pingdom declarative configuration with Python',
    image: '/images/projects/pingdom.png',
    date: '2021-07-01',
    link: 'https://github.com/bsgrigorov/pingdom-python-config',
    desc:
      'Built a python application that configures Pingdom using Pingdom API 3.1. The application uses a declarative approach to check creation.',
  },
  {
    title: 'Read Easy',
    subtitle: 'Application for teaching english',
    image: '/images/projects/readeasy.jpeg',
    date: '2017-11-20',
    desc:
      'Created a cross platform mobile application using Ionic, AngularJS and NodeJS that teaches users English by suggesting texts based on their proficiency. Used personalized word models from thesis project for selecting texts.',
  },
  {
    title: 'Language Learning',
    subtitle: 'Honours dissertation on an application for learning languages',
    image: '/images/projects/language-learning.jpeg',
    date: '2016-04-20',
    desc:
      'Constructed language learning desktop application that estimates the level of proficiency of users and recommends suitable articles to read. Utilized Python, NLP, JavaFX, data analysis, data modelling and statistics. Wrote honours dissertation on it.',
  },
];

export default data;
