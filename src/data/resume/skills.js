const skills = [
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Next.js',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Golang',
    competency: 5,
    category: ['Cloud Development', 'Languages'],
  },
  {
    title: 'Solidity',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Blockchain',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Clickhouse',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'SAP HANA SQL',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'DynamoDB',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 1,
    category: ['Databases'],
  },
  {
    title: 'Loki',
    competency: 1,
    category: ['Monitoring', 'Databases'],
  },
  {
    title: 'Amazon Web Services',
    competency: 5,
    category: ['Cloud Development'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 5,
    category: ['Cloud Development'],
  },
  {
    title: 'Microsoft Azure',
    competency: 1,
    category: ['Cloud Development'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Cloud Development'],
  },
  {
    title: 'Kubernetes',
    competency: 5,
    category: ['Cloud Development'],
  },
  {
    title: 'Helm',
    competency: 5,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'helmfile',
    competency: 4,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'ArgoCD',
    competency: 3,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'Prometheus',
    competency: 4,
    category: ['Monitoring', 'Cloud Development'],
  },
  {
    title: 'Grafana',
    competency: 4,
    category: ['Monitoring', 'Cloud Development'],
  },
  {
    title: 'Terraform',
    competency: 5,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'Atlantis',
    competency: 3,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'Ansible',
    competency: 3,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'Vault',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Vercel',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Dynatrace',
    competency: 2,
    category: ['Monitoring'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Jira Software',
    competency: 3,
    category: ['Software'],
  },
  {
    title: 'Chrome Dev Tools',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Postman',
    competency: 3,
    category: ['Software'],
  },
  {
    title: 'macOS',
    competency: 4,
    category: ['Software'],
  },
  {
    title: 'Linux',
    competency: 3,
    category: ['Software'],
  },
  {
    title: 'Windows',
    competency: 3,
    category: ['Software'],
  },
  {
    title: 'IntelliJ',
    competency: 3,
    category: ['Software'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'SRE',
    competency: 3,
    category: ['Methodologies'],
  },
  {
    title: 'DevOps',
    competency: 5,
    category: ['Methodologies'],
  },
  {
    title: 'CI/CD',
    competency: 5,
    category: ['Methodologies'],
  },
  {
    title: 'GitOps',
    competency: 4,
    category: ['Methodologies'],
  },
  {
    title: 'Platform Engineering',
    competency: 5,
    category: ['Methodologies'],
  },
  {
    title: 'Agile/Scrum',
    competency: 4,
    category: ['Methodologies'],
  },
  {
    title: 'PagerDuty',
    competency: 4,
    category: ['Software'],
  },
  {
    title: 'Cloudflare',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'env0',
    competency: 2,
    category: ['Cloud Development'],
  },
  {
    title: 'Jsonnet',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Teleport',
    competency: 4,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'Github Actions',
    competency: 5,
    category: ['Cloud Development'],
  },
  {
    title: 'pnpm',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'turbo',
    competency: 4,
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  // '#747fff',
  // '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
