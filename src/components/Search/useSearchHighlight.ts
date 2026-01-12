'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

// Constants
const HEADER_OFFSET = 120;
const VIEWPORT_BOTTOM_PADDING = 100;
const DOM_READY_DELAY = 100;
const SCROLL_DURATION = 400;
const ANIMATION_DURATION = 4000;
const HIGHLIGHT_CLASS = 'search-highlight';

/**
 * Check if an element is visible in the viewport (with padding for header)
 */
function isElementInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top >= HEADER_OFFSET && rect.top < windowHeight - VIEWPORT_BOTTOM_PADDING;
}

/**
 * Hook to highlight an element when navigating from search results.
 * Uses query parameter (?highlight=id) instead of hash to avoid browser auto-scroll.
 * Only scrolls if the element is not already visible.
 */
export function useSearchHighlight() {
  const searchParams = useSearchParams();
  const highlightId = searchParams.get('highlight');
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!highlightId) return;

    const timeouts: NodeJS.Timeout[] = [];

    // Small delay to ensure DOM is ready
    timeouts.push(
      setTimeout(() => {
        const element = document.getElementById(highlightId);
        if (!element) return;

        elementRef.current = element;

        const applyHighlight = () => element.classList.add(HIGHLIGHT_CLASS);

        if (isElementInViewport(element)) {
          applyHighlight();
        } else {
          // Scroll to element with header offset
          const y = element.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          timeouts.push(setTimeout(applyHighlight, SCROLL_DURATION));
        }
      }, DOM_READY_DELAY),
    );

    // Clean up after animation
    timeouts.push(
      setTimeout(() => {
        elementRef.current?.classList.remove(HIGHLIGHT_CLASS);
        window.history.replaceState(null, '', window.location.pathname);
      }, ANIMATION_DURATION + DOM_READY_DELAY + SCROLL_DURATION),
    );

    return () => timeouts.forEach(clearTimeout);
  }, [highlightId]);
}

export default useSearchHighlight;
