'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Fuse, { FuseResult, FuseResultMatch } from 'fuse.js';
import Link from 'next/link';
import { searchIndex, SearchItem } from '@/data/search';

// Constants
const DEBOUNCE_MS = 50;
const MIN_QUERY_LENGTH = 2;
const MAX_RESULTS = 8;

// Configure Fuse.js
const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'subtitle', weight: 0.2 },
    { name: 'content', weight: 0.4 },
  ],
  threshold: 0.3,
  includeMatches: true,
  minMatchCharLength: MIN_QUERY_LENGTH,
});

// Icon mapping for result types
const typeIcons: Record<SearchItem['type'], string> = {
  work: '💼',
  skill: '🛠️',
  project: '🚀',
  certification: '🏆',
  education: '🎓',
  about: '👤',
};

const typeLabels: Record<SearchItem['type'], string> = {
  work: 'Experience',
  skill: 'Skill',
  project: 'Project',
  certification: 'Certification',
  education: 'Education',
  about: 'About',
};

// Highlight function
const highlightMatch = (text: string, matches?: readonly FuseResultMatch[]): string => {
  if (!matches || matches.length === 0) return text;

  const match = matches.find((m) => m.key === 'title' || m.key === 'content');
  if (!match || !match.indices || match.value !== text) return text;

  let result = '';
  let lastIndex = 0;

  match.indices.forEach(([start, end]: readonly [number, number]) => {
    result += text.slice(lastIndex, start);
    result += `<mark>${text.slice(start, end + 1)}</mark>`;
    lastIndex = end + 1;
  });
  result += text.slice(lastIndex);

  return result;
};

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FuseResult<SearchItem>[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounced search when query changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length >= MIN_QUERY_LENGTH) {
        const searchResults = fuse.search(query).slice(0, MAX_RESULTS);
        setResults(searchResults);
        setSelectedIndex(0);
      } else {
        setResults([]);
      }
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        setIsOpen(false);
        setQuery('');
        router.push(results[selectedIndex].item.link);
      }
    },
    [results, selectedIndex, router],
  );

  return (
    <div className="search-container" ref={containerRef}>
      <div className={`search-box ${isOpen ? 'open' : ''}`}>
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search my experience..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
          <button
            className={`search-clear ${query ? 'visible' : ''}`}
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            tabIndex={query ? 0 : -1}
            aria-hidden={!query}
          >
            ×
          </button>
        </div>

        {isOpen && results.length > 0 && (
          <div className="search-results">
            {results.map((result, index) => (
              <Link
                key={result.item.id}
                href={result.item.link}
                className={`search-result ${index === selectedIndex ? 'selected' : ''}`}
                onClick={() => {
                  setIsOpen(false);
                  setQuery('');
                }}
              >
                <span className="result-icon">{typeIcons[result.item.type]}</span>
                <div className="result-content">
                  <span
                    className="result-title"
                    dangerouslySetInnerHTML={{
                      __html: highlightMatch(result.item.title, result.matches),
                    }}
                  />
                  {result.item.subtitle && (
                    <span className="result-subtitle">{result.item.subtitle}</span>
                  )}
                  <span className="result-type">{typeLabels[result.item.type]}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {isOpen && query.length >= MIN_QUERY_LENGTH && results.length === 0 && (
          <div className="search-results">
            <div className="search-no-results">No results found for &ldquo;{query}&rdquo;</div>
          </div>
        )}
      </div>
    </div>
  );
}
