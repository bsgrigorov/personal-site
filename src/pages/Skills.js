import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import SkillsComponent from '../components/Skills/Skills';
import { skills, categoryColors } from '../data/skills';

const Skills = () => {
  const [showFavourites, setShowFavourites] = useState(false);

  return (
    <Main
      title="Skills"
      description="Borislav Grigorov's Skills and Technologies."
    >
      <article className="post" id="skills">
        <header>
          <div className="title skills-title">
            <h2><Link to="/skills">Skills</Link></h2>
            <button
              type="button"
              className={`favourite-toggle ${showFavourites ? 'active' : ''}`}
              onClick={() => setShowFavourites(!showFavourites)}
            >
              ★ Favourites
            </button>
          </div>
        </header>
        <SkillsComponent
          skills={skills}
          colors={categoryColors}
          showFavourites={showFavourites}
        />
      </article>
    </Main>
  );
};

export default Skills;
