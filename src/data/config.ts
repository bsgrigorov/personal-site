/**
 * Global site configuration
 *
 * This file contains all the personal/site information that is reused across the site.
 * Update values here and they will be reflected everywhere.
 */

export const siteConfig = {
  // Personal info
  name: 'Borislav Grigorov',
  nickname: 'Bobby',
  firstName: 'Borislav',
  lastName: 'Grigorov',

  // Professional
  jobTitle: 'DevOps Engineer',
  company: 'SynKube',
  description:
    'Seattle-based engineer focused on AI, Cloud, Kubernetes, and Security.',
  description2:
    'Building secure multi-cloud platforms and shipping production software with Go, TypeScript, Kubernetes, and AI-assisted delivery.',

  // Location
  city: 'Seattle',
  state: 'WA',
  country: 'USA',
  get location() {
    return `${this.city}, ${this.state}`;
  },

  // Birthday (for age calculation)
  birthday: new Date('1993-07-21T09:24:00'),

  // URLs
  siteUrl: 'https://bgrigorov.com',
  resumePdfPath: '/resume/Borislav-Grigorov-Resume.pdf',
  resumePdfFilename: 'Borislav-Grigorov-Resume.pdf',

  // Social / GitHub
  github: {
    username: 'bsgrigorov',
    get profileUrl() {
      return `https://github.com/${this.username}`;
    },
    repoName: 'personal-site',
    get repoUrl() {
      return `https://github.com/${this.username}/${this.repoName}`;
    },
  },

  social: {
    facebook: 'bsgrigorov',
    instagram: 'bsgrigorov',
    linkedin: 'bgrigorov',
    twitter: 'bsgrigorov', // X/Twitter handle
    email: 'bobby+personal-website@synkube.com',
  },

  // SEO keywords
  keywords: [
    // Name variations
    'Borislav Grigorov',
    'Bobby Grigorov',

    // Primary role
    'DevOps Engineer',
    'Software Engineer',
    'DevOps',
    'TypeScript',
    'Go',
    'DevSecOps',
    'Platform Engineer',
    'Site Reliability Engineer',
    'SRE',

    // Core technologies
    'Kubernetes',
    'Docker',
    'Terraform',
    'AWS',
    'GCP',
    'Azure',
    'CI/CD',
    'Infrastructure as Code',
    'IaC',

    // Blockchain/Web3
    'blockchain',
    'Web3',
    'MetaMask',
    'Consensys',
    'Coinbase',
    'Bitcoin',
    'Solana',
    'Ethereum',

    // Location
    'Seattle',
    'UBC Alumni',
  ],
} as const;

// Type for the config (useful if you need to pass it around)
export type SiteConfig = typeof siteConfig;

