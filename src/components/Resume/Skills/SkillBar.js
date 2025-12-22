import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data, color = '#666' }) => {
  const { competency, title } = data;

  const titleStyle = {
    background: color,
  };

  const barStyle = {
    background: color,
    width: `${Math.min(100, Math.max((competency / 5.0) * 100.0, 0))}%`,
  };

  return (
    <div className="skillbar clearfix">
      <div className="skillbar-title" style={titleStyle}><span>{title}</span></div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skill-bar-percent">{competency} / 5</div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
};

export default SkillBar;
