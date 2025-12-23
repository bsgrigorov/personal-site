import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import { siteConfig } from './config';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: siteConfig.github.profileUrl,
    label: 'Github',
    icon: faGithub,
  },
  {
    link: `https://facebook.com/${siteConfig.social.facebook}`,
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: `https://www.instagram.com/${siteConfig.social.instagram}/`,
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: `https://www.linkedin.com/in/${siteConfig.social.linkedin}`,
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: `https://x.com/${siteConfig.social.twitter}`,
    label: 'X',
    icon: faXTwitter,
  },
  {
    link: `mailto:${siteConfig.social.email}`,
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
