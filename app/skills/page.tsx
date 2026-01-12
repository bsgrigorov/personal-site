'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import SkillsComponent from '@/components/Skills/Skills';
import { useSearchHighlight } from '@/components/Search/useSearchHighlight';
import { skills, categoryColors } from '@/data/skills';

import PageWrapper from '../components/PageWrapper';

export default function SkillsPage() {
  const [showFavourites, setShowFavourites] = useState(false);
  useSearchHighlight();

  return (
    <PageWrapper>
      <article className="post" id="skills">
        <header>
          <div className="title skills-title">
            <h2>
              <Link href="/skills">Skills</Link>
            </h2>
            <button
              type="button"
              className={`favourite-toggle ${showFavourites ? 'active' : ''}`}
              onClick={() => setShowFavourites(!showFavourites)}
            >
              ★ Favourites
            </button>
          </div>
        </header>
        <SkillsComponent skills={skills} colors={categoryColors} showFavourites={showFavourites} />
      </article>
    </PageWrapper>
  );
}
