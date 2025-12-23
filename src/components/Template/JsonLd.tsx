import { siteConfig } from '@/data/config';

/**
 * JSON-LD Structured Data for SEO
 * Provides rich snippets in search results
 */
const JsonLd = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    alternateName: siteConfig.nickname,
    jobTitle: siteConfig.jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.company,
    },
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/images/me.jpg`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: siteConfig.country,
    },
    sameAs: [
      `https://github.com/${siteConfig.github.username}`,
      `https://linkedin.com/in/${siteConfig.social.linkedin}`,
      `https://twitter.com/${siteConfig.social.twitter}`,
      `https://instagram.com/${siteConfig.social.instagram}`,
      `https://facebook.com/${siteConfig.social.facebook}`,
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.name} - Personal Website`,
    alternateName: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default JsonLd;

