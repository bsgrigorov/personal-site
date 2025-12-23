import { SkillData } from '@/components/Skills/SkillBar';

const skills: Record<string, SkillData[]> = {
  Languages: [
    { title: 'Golang', competency: 5, favourite: true },
    { title: 'Python', competency: 4 },
    { title: 'Javascript', competency: 4 },
    { title: 'Typescript', competency: 4, favourite: true },
    { title: 'Node.js', competency: 4 },
    { title: 'Next.js', competency: 3, favourite: true },
    { title: 'Java', competency: 3 },
    { title: 'Bash', competency: 3 },
    { title: 'HTML/CSS', competency: 3 },
    { title: 'React', competency: 2 },
    { title: 'MATLAB', competency: 2 },
  ],
  Databases: [
    { title: 'PostgreSQL', competency: 4 },
    { title: 'MySQL', competency: 3 },
    { title: 'Redis', competency: 3 },
    { title: 'Clickhouse', competency: 3 },
    { title: 'SAP HANA SQL', competency: 3 },
    { title: 'DynamoDB', competency: 2 },
  ],
  Methodologies: [
    { title: 'DevOps', competency: 5 },
    { title: 'CI/CD', competency: 5 },
    { title: 'Platform Engineering', competency: 5, favourite: true },
    { title: 'GitOps', competency: 4 },
    { title: 'SRE', competency: 3 },
  ],
  Monitoring: [
    { title: 'Prometheus', competency: 4 },
    { title: 'Grafana', competency: 4 },
    { title: 'OpenTelemetry', competency: 3 },
    { title: 'Loki', competency: 1 },
  ],
  'Cloud Providers': [
    { title: 'Amazon Web Services (AWS)', competency: 5 },
    { title: 'Google Cloud Platform (GCP)', competency: 5, favourite: true },
    { title: 'Cloudflare', competency: 5 },
    { title: 'Vercel', competency: 5, favourite: true },
    { title: 'Microsoft Azure', competency: 1 },
  ],
  'Cloud Technologies': [
    { title: 'Kubernetes', competency: 5, favourite: true },
    { title: 'Docker', competency: 5 },
    { title: 'Terraform', competency: 5, favourite: true },
    { title: 'Helm', competency: 5 },
    { title: 'Github Actions', competency: 5 },
    { title: 'ArgoCD', competency: 4, favourite: true },
    { title: 'Teleport', competency: 4 },
    { title: 'Atlantis', competency: 3 },
    { title: 'Ansible', competency: 3 },
  ],
  Web3: [
    { title: 'Blockchain RPCs', competency: 4, favourite: true },
    { title: 'Cubist', competency: 4 },
    { title: 'Solidity', competency: 1 },
  ],
  Tools: [
    { title: 'Git', competency: 4 },
    { title: 'Chrome Dev Tools', competency: 3 },
    { title: 'pnpm', competency: 4 },
    { title: 'turbo', competency: 4 },
  ],
  Software: [
    { title: 'Cursor', competency: 4, favourite: true },
    { title: 'PagerDuty', competency: 4 },
    { title: 'macOS', competency: 4 },
    { title: 'Jira', competency: 3 },
    { title: 'Postman', competency: 3 },
    { title: 'Linux', competency: 3 },
    { title: 'Windows', competency: 3 },
    { title: 'Vault', competency: 3 },
    { title: 'env0', competency: 2 },
  ],
};

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#e47272',
  '#2a7bc4', // Cloud Providers - darker blue
  '#cc7b94',
  '#515dd4',
  '#c3423f',
  '#d15dd4',
  '#747fff',
  '#64cb7b',
];

const categoryColors: Record<string, string> = Object.fromEntries(
  Object.keys(skills).map((category, index) => [category, colors[index]]),
);

export { skills, categoryColors };
