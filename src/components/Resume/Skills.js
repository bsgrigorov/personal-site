import React from 'react';
import PropTypes from 'prop-types';

import SkillBar from './Skills/SkillBar';

const Skills = ({ skills, colors }) => {
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
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      competency: PropTypes.number,
    })),
  ).isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Skills;
