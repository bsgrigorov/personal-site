/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Consensys (MetaMask)',
    position: 'Sr DevSecOps Engineer',
    url: 'https://metamask.io/',
    startDate: '2024-08-01',
    highlights: [
      'Worked on MetaMask tooling team with focus on infra, SDLC, and security.',
      'Designed, built and managed AWS infra using Terraform and Atlantis in Github.',
      'Utilized EKS, ECS, RDS, S3, SecretsManager, IAM across teams and projects.',
      'Deployed ETH wallet management Node.js apps with AWS SAM and Lambda.',
      'Created reusable CI/CD pipelines for building, testing and packaging Golang and Node.js apps.',
      'Automated helm deploys to EKS with ArgoCD.',
    ],
  },
  {
    name: 'Synapse Protocol',
    position: 'Senior DevOps Engineer',
    url: 'https://jobs.ashbyhq.com/protochain',
    startDate: '2023-02-01',
    endDate: '2024-03-01',
    highlights: [
      'Worked for a 10-person web3 startup supporting apps for Synapse Protocol.',
      'Designed and deployed web3 infrastructure with Terraform Cloud in GCP.',
      'Managed GKE kube clusters, deployed workloads with Helm, Teleport and Github Actions.',
      'Deployed and maintained blockchain rpc nodes for several EVM chains.',
      'Handled security, monitoring, alerting, backups, upgrades and scaling of infrastructure.',
      'Was the go-to person for any DevOps tasks, integrations and troubleshooting.',
    ],
  },
  {
    name: 'Coinbase',
    position: 'Senior Blockchain Engineer',
    url: 'https://www.coinbase.com/',
    startDate: '2022-06-01',
    endDate: '2023-02-01',
    highlights: [
      'Supported Web3 by building world class Blockchain infrastructure as part of Coinbase Cloud.',
      'Developed, upgraded and monitored blockchain nodes and validators for Bitcoin, Dogecoin, Zcash, Cosmos, Avalanche, Helium and Flow in Kubernetes.',
      'Onboarded new blockchains Aptos and Sui to the Coinbase Cloud platform.',
      'Participated in on-call rotation support and handled multiple large scale production incidents.',
    ],
  },
  {
    name: 'SAP LLC',
    position: 'Senior Software Engineer',
    url: 'https://www.linkedin.com/company/eurekabysaps4hana/',
    startDate: '2020-08-01',
    endDate: '2022-06-01',
    highlights: [
      'Worked on SAP Eureka an incubation unit part of SAP S/4HANA designed to bring world-class cloud-native architecture to ERP.',
      'Designed and implemented applications on K8s in GKE and EKS.',
      'Led and designed CICD, observability and malware scanning features.',
      'Configured K8s and database monitoring and alerting using Prometheus and Grafana.',
      'Built applications using the k8s operator pattern in Golang and Helm.',
      'Architected, delivered, and maintained Jira Data Center on k8s for 2000+ users.',
      'Conducted interviews, wrote technical docs, and interfaced cross-team.',
    ],
  },
  {
    name: 'SAP Canada Inc',
    position: 'Senior Software Developer',
    url: 'https://www.sap.com/canada/index.html',
    startDate: '2019-04-01',
    endDate: '2020-07-01',
    highlights: [
      'Developed enterprise software with focus on design, implementation and testing in an Agile team.',
      'Delivered monitoring, usage tracking, infrastructure, quality and Frontend features for SAP Analytics Cloud.',
      'Implemented features on Java microservices, frontend with SAP UI5, backend in XSJS, python data extraction scripts, HANA SQL data modelling, Jenkins job deployments, CI/CD, RabbitMQ, Cloud Foundry.',
      'Collaborated in teams of 10-20 individuals. Provided coaching and mentorship to team members.',
    ],
  },
  {
    name: 'SAP Canada Inc',
    position: 'Software Developer',
    url: 'https://www.sap.com/canada/index.html',
    startDate: '2016-07-01',
    endDate: '2019-03-01',
    highlights: [
      'Worked on SAP Analytics Cloud a best-in-class SaaS solution for Analytics, Planning, Predictive and BI.',
      'Designed customer facing data modelling features, integrations features and UI with SAP UI5.',
      'Produced high quality code in a fast-paced work environment with 2-week release cycles.',
    ],
  },
  {
    name: 'Tetracom Interactive Solutions',
    position: 'Software Developer',
    url: 'https://www.tetracom.com/',
    startDate: '2014-05-01',
    endDate: '2014-09-01',
    highlights: [
      'Developed text shortening software using UIMA Ruta language for text analysis and annotation.',
      'Programmed in Java and PostgreSQL.',
      'Developed NLP tools for noun phrase detection, entity recognition, text summarization and keyword extraction.',
      'Collected data for statistical classifiers and developed models for news article classification.',
    ],
  },
];

export default work;
