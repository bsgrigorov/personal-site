'use client';

import Script from 'next/script';

interface LinkedInRecommendationsProps {
  embedId?: string;
  useIframe?: boolean;
}

const LinkedInRecommendations = ({
  embedId = '25636191',
  useIframe = true,
}: LinkedInRecommendationsProps) => (
  <div className="linkedin-recommendations">
    <div className="title">
      <h3>LinkedIn Recommendations</h3>
    </div>
    {useIframe ? (
      <iframe
        src={`https://widgets.sociablekit.com/linkedin-recommendations/iframe/${embedId}`}
        title="LinkedIn Recommendations"
        width="100%"
        height="600"
        style={{ border: 'none', overflow: 'hidden' }}
        loading="lazy"
        allowFullScreen
      />
    ) : (
      <>
        <div
          className="sk-ww-linkedin-recommendations"
          data-embed-id={embedId}
        />
        <Script
          src="https://widgets.sociablekit.com/linkedin-recommendations/widget.js"
          strategy="afterInteractive"
        />
      </>
    )}
  </div>
);

export default LinkedInRecommendations;

