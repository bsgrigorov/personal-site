'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { searchIndex, SearchItem } from '@/data/search';

// Configure Fuse.js
const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'subtitle', weight: 0.2 },
    { name: 'content', weight: 0.4 },
  ],
  threshold: 0.3,
  includeMatches: true,
  minMatchCharLength: 2,
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

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Fuse.FuseResult<SearchItem>[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Search when query changes
  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchResults = fuse.search(query).slice(0, 8);
      setResults(searchResults);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
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
        // Navigate programmatically
        window.location.href = results[selectedIndex].item.link;
      }
    },
    [results, selectedIndex],
  );

  const highlightMatch = (text: string, matches?: readonly Fuse.FuseResultMatch[]) => {
    if (!matches || matches.length === 0) return text;

    const match = matches.find((m) => m.key === 'title' || m.key === 'content');
    if (!match || !match.indices || match.value !== text) return text;

    let result = '';
    let lastIndex = 0;

    match.indices.forEach(([start, end]) => {
      result += text.slice(lastIndex, start);
      result += `<mark>${text.slice(start, end + 1)}</mark>`;
      lastIndex = end + 1;
    });
    result += text.slice(lastIndex);

    return result;
  };

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

        {isOpen && query.length >= 2 && results.length === 0 && (
          <div className="search-results">
            <div className="search-no-results">No results found for &ldquo;{query}&rdquo;</div>
          </div>
        )}
      </div>
    </div>
  );
}
