import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import SkillsComponent from '../components/Resume/Skills';
import { skills, categories } from '../data/resume/skills';

const Skills = () => (
  <Main
    title="Skills"
    description="Borislav Grigorov's Skills and Technologies."
  >
    <article className="post" id="skills">
      <header>
        <div className="title">
          <h2><Link to="/skills">Skills</Link></h2>
        </div>
      </header>
      <SkillsComponent skills={skills} categories={categories} />
    </article>
  </Main>
);

export default Skills;
