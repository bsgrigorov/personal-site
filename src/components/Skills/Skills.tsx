import React from 'react';

import SkillBar, { SkillData } from './SkillBar';

interface SkillsProps {
  skills: Record<string, SkillData[]>;
  colors: Record<string, string>;
  showFavourites?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ skills, colors, showFavourites = false }) => {
  const categories = Object.keys(skills);

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="skills-columns">
        {categories.map((category) => (
          <div className="skill-section" key={category}>
            <h3 className="skill-section-heading" style={{ color: colors[category] }}>
              {category}
            </h3>
            <div className="skill-section-items">
              {skills[category].map((skill) => (
                <SkillBar
                  color={colors[category]}
                  data={skill}
                  key={skill.title}
                  highlightFavourite={showFavourites && skill.favourite}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
