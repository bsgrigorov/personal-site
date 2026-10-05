import { JobData } from '@/components/Resume/Experience/Job';

const work: JobData[] = [
  {
    name: 'Consensys (MetaMask)',
    position: 'Sr DevSecOps Engineer II',
    url: 'https://metamask.io',
    location: 'Seattle, WA',
    startDate: '2024-09-01',
    endDate: '2026-10-01',
    highlights: [
      'Managed AWS platform with Terraform/Atlantis, EKS, CI/CD and ArgoCD for Go and Node.js services.',
      'Built shift-left pipelines and infrastructure scanning (KICS, Trivy).',
      'Led MetaMask browser extension release work: RAPID designs, threat modeling, production keyless store submission and monitoring.',
      'AI-assisted service onboarding automation (app code, pipelines, deploy manifests, integrations); decreased rollout from weeks to < 1 day.',
      'Delivered Node.js Lambdas for wallet operations (transactions, claims, swaps); security hardening as scale grew.',
    ],
  },
  {
    name: 'Synapse Protocol',
    position: 'Sr DevOps Engineer',
    url: 'https://synapseprotocol.com',
    location: 'New York, NY',
    startDate: '2023-02-01',
    endDate: '2024-02-01',
    highlights: [
      'Sole DevOps engineer for a 10-person web3 startup supporting Synapse Protocol.',
      'Designed and deployed infrastructure with Terraform Cloud on GCP; managed GKE, Helm, Teleport, and GitHub Actions.',
      'Owned security, monitoring, alerting, backups, upgrades, and scaling.',
      'Deployed and maintained EVM RPC nodes.',
      'Primary owner for DevOps integrations and production support.',
    ],
  },
  {
    name: 'Coinbase',
    position: 'Sr Blockchain Engineer',
    url: 'https://www.coinbase.com',
    location: 'Orange County, CA',
    startDate: '2022-06-01',
    endDate: '2023-02-01',
    highlights: [
      'Supported Web3 by building world class Blockchain infrastructure.',
      'Provisioned, upgraded and monitored blockchain RPC nodes and validators for Bitcoin, Dogecoin, Zcash, Cosmos, Avalanche, Helium, and Flow in Kubernetes (EKS, GKE).',
      'Onboarded new blockchains Aptos and Sui to the Cloud platform.',
      'Participated in on-call rotation support and handled multiple large-scale production incidents.',
    ],
  },
  {
    name: 'SAP',
    position: 'Sr Software Engineer',
    url: 'https://www.linkedin.com/company/eurekabysaps4hana/',
    location: 'Newport Beach, CA',
    startDate: '2020-07-01',
    endDate: '2022-06-01',
    highlights: [
      'SAP Eureka (S/4HANA incubation): cloud-native ERP on Kubernetes across GKE and EKS.',
      'Platform services, APIs, deploy workflows on the infrastructure team.',
      'Kubernetes operators in Go and Helm; Prometheus/Grafana for cluster and database monitoring.',
      'Architected, delivered, and maintained Jira Data Center on Kubernetes for 2000+ users.',
      'Conducted interviews, wrote technical docs, and interfaced cross-team.',
    ],
  },
  {
    name: 'SAP Canada Inc.',
    position: 'Sr Software Developer',
    url: 'https://www.sap.com/canada/index.html',
    location: 'Vancouver, BC',
    startDate: '2016-07-01',
    endDate: '2020-07-01',
    highlights: [
      'SAP Analytics Cloud: monitoring, usage tracking, infrastructure, quality, and customer-facing self-monitoring features.',
      'Java microservices, SAP UI5, Python/HANA, Jenkins CI/CD, RabbitMQ, and Cloud Foundry.',
      'Mentored junior teammates.',
    ],
  },
  {
    name: 'Tetracom Interactive Solutions',
    position: 'Software Developer',
    url: 'https://www.tetracom.com/',
    location: 'Sofia, Bulgaria',
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
