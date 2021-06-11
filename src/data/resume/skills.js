// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'NodeJS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development'],
  },
  {
    title: 'Ionic',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'AngularJS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'SAP UI5',
    competency: 1,
    category: ['Web Development'],
  },
  {
    title: 'Golang',
    competency: 2,
    category: ['Cloud Development', 'Languages'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Monitoring', 'Databases'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases', 'Languages'],
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
    competency: 4,
    category: ['Cloud Development'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 2,
    category: ['Cloud Development'],
  },
  {
    title: 'Microsoft Azure',
    competency: 1,
    category: ['Cloud Development'],
  },
  {
    title: 'Cloud Foundry',
    competency: 3,
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
    competency: 4,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'Operator Pattern',
    competency: 3,
    category: ['Cloud Development'],
  },
  {
    title: 'Prometheus',
    competency: 5,
    category: ['Monitoring', 'Cloud Development'],
  },
  {
    title: 'Grafana',
    competency: 4,
    category: ['Monitoring', 'Cloud Development'],
  },
  {
    title: 'Terraform',
    competency: 3,
    category: ['Tools', 'Cloud Development'],
  },
  {
    title: 'Vault',
    competency: 3,
    category: ['Tools'],
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
    competency: 4,
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
    title: 'JUnit',
    competency: 2,
    category: ['Testing'],
  },
  {
    title: 'Jasmine',
    competency: 2,
    category: ['Testing'],
  },
  {
    title: 'pytest',
    competency: 1,
    category: ['Testing'],
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
    competency: 2,
    category: ['Methodologies'],
  },
  {
    title: 'GitOps',
    competency: 2,
    category: ['Methodologies'],
  },
  {
    title: 'Agile/Scrum',
    competency: 4,
    category: ['Methodologies'],
  },
  {
    title: 'Jenkins',
    competency: 3,
    category: ['Software', 'Cloud Development'],
  },
  {
    title: 'PagerDuty',
    competency: 2,
    category: ['Software'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
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
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
