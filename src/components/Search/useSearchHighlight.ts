'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * Check if an element is visible in the viewport (with some padding for header)
 */
function isElementInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const headerOffset = 120; // Account for fixed header

  // Check if element is visible below header and above bottom
  return rect.top >= headerOffset && rect.top < windowHeight - 100;
}

/**
 * Hook to highlight an element when navigating from search results.
 * Uses query parameter (?highlight=id) instead of hash to avoid browser auto-scroll.
 * The highlight fades out after 4 seconds (controlled by CSS animation).
 * Only scrolls if the element is not already visible.
 */
export function useSearchHighlight() {
  const searchParams = useSearchParams();
  const highlightId = searchParams.get('highlight');

  useEffect(() => {
    if (!highlightId) return;

    // Small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      const element = document.getElementById(highlightId);
      if (!element) return;

      // Check if element is already nicely visible
      if (isElementInViewport(element)) {
        // Already visible, just highlight immediately
        element.classList.add('search-highlight');
      } else {
        // Need to scroll - calculate position with header offset
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

        // Add highlight after scroll completes
        setTimeout(() => {
          element.classList.add('search-highlight');
        }, 400);
      }
    }, 100);

    // Clean up after animation (4s animation + buffer)
    const cleanupTimeout = setTimeout(() => {
      const element = document.getElementById(highlightId);
      if (element) {
        element.classList.remove('search-highlight');
      }
      // Clean up URL - remove query param
      if (window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }, 4500);

    return () => {
      clearTimeout(initTimeout);
      clearTimeout(cleanupTimeout);
    };
  }, [highlightId]);
}

export default useSearchHighlight;
