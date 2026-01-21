'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface Section {
  name: string;
  id: string;
}

interface ScrollNavProps {
  sections: Section[];
}

const ScrollNav = ({ sections }: ScrollNavProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id ?? '');
  const visibleSections = useRef<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Early return if no sections or IntersectionObserver not supported
    if (!sections.length || typeof IntersectionObserver === 'undefined') {
      return;
    }

    // Clear previous state
    visibleSections.current.clear();

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      // Batch updates
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (!id) return;

        if (entry.isIntersecting) {
          visibleSections.current.add(id);
        } else {
          visibleSections.current.delete(id);
        }
      });

      // Find first visible section in order
      const firstVisible = sections.find((s) => visibleSections.current.has(s.id));

      if (firstVisible) {
        setActiveSection(firstVisible.id);
        return;
      }

      // Fallback: if at bottom, select last section
      try {
        const isAtBottom =
          window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
        if (isAtBottom) {
          setActiveSection(sections[sections.length - 1].id);
        }
      } catch {
        // Ignore errors accessing window during SSR
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0,
    });

    // Observe all section elements
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [sections]);

  const handleClick = useCallback((id: string) => {
    try {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
        setActiveSection(id);
      }
    } catch {
      // Fallback: just set active section
      setActiveSection(id);
    }
  }, []);

  // Don't render if no sections
  if (!sections.length) return null;

  return (
    <nav className="scroll-nav" aria-label="Page sections">
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          className={`scroll-nav-line ${activeSection === section.id ? 'is-active' : ''}`}
          onClick={() => handleClick(section.id)}
          aria-label={section.name}
          aria-current={activeSection === section.id ? 'true' : undefined}
        />
      ))}
    </nav>
  );
};

export default ScrollNav;
