import { SkillData } from '@/components/Skills/SkillBar';

const skills: Record<string, SkillData[]> = {
  Languages: [
    { title: 'Golang', competency: 5, favourite: true },
    { title: 'TypeScript', competency: 4, favourite: true },
    { title: 'JavaScript', competency: 4 },
    { title: 'Python', competency: 4 },
    { title: 'Node.js', competency: 4 },
    { title: 'Next.js', competency: 3, favourite: true },
    { title: 'Bash', competency: 3 },
  ],
  'AI agents': [
    { title: 'Cursor', competency: 5, favourite: true },
    { title: 'Claude', competency: 4 },
    { title: 'Hermes', competency: 4 },
    { title: 'MCP', competency: 3 },
    { title: 'Multi-agent orchestration', competency: 3 },
  ],
  Databases: [
    { title: 'PostgreSQL', competency: 4 },
    { title: 'Redis', competency: 3 },
    { title: 'ClickHouse', competency: 3 },
    { title: 'DynamoDB', competency: 3 },
    { title: 'SAP HANA SQL', competency: 3 },
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
    { title: 'OpenTelemetry', competency: 4 },
  ],
  'Cloud Providers': [
    { title: 'Amazon Web Services (AWS)', competency: 5 },
    { title: 'Google Cloud Platform (GCP)', competency: 5, favourite: true },
    { title: 'Cloudflare', competency: 5, favourite: true },
    { title: 'Vercel', competency: 5 },
    { title: 'DigitalOcean', competency: 4 },
    { title: 'Microsoft Azure', competency: 1 },
  ],
  'Cloud Technologies': [
    { title: 'Kubernetes', competency: 5, favourite: true },
    { title: 'Docker', competency: 5 },
    { title: 'Terraform', competency: 5, favourite: true },
    { title: 'Terraform Cloud', competency: 4 },
    { title: 'Helm', competency: 5 },
    { title: 'GitHub Actions', competency: 5 },
    { title: 'ArgoCD', competency: 4, favourite: true },
    { title: 'Atlantis', competency: 4 },
    { title: 'Teleport', competency: 4 },
    { title: 'Ansible', competency: 3 },
  ],
  Security: [
    { title: 'OIDC', competency: 4 },
    { title: 'IAM', competency: 4 },
    { title: 'Workload Identity', competency: 4 },
    { title: 'Trivy', competency: 4 },
    { title: 'KICS', competency: 3 },
    { title: 'Cosign / Sigstore', competency: 3 },
  ],
  Web3: [
    { title: 'Blockchain RPCs', competency: 4, favourite: true },
    { title: 'Wallet Management', competency: 4 },
    { title: 'Cubist', competency: 4 },
  ],
  Tools: [
    { title: 'Git', competency: 4 },
    { title: 'gRPC', competency: 3 },
    { title: 'DNS', competency: 3 },
  ],
  Software: [
    { title: 'Linux', competency: 4 },
    { title: 'macOS', competency: 4 },
    { title: 'Windows', competency: 3 },
    { title: 'PagerDuty', competency: 4 },
    { title: 'env0', competency: 2 },
  ],
};

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#e47272',
  '#2a7bc4',
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
