import React from 'react';
import PropTypes from 'prop-types';

const GOLDEN = '#ffd700';

const SkillBar = ({ data, color, highlightFavourite }) => {
  const { competency, title } = data;
  const activeColor = highlightFavourite ? GOLDEN : color;

  const titleStyle = {
    background: activeColor,
  };

  const barStyle = {
    background: activeColor,
    width: `${Math.min(100, Math.max((competency / 5.0) * 100.0, 0))}%`,
  };

  const className = `skillbar clearfix${highlightFavourite ? ' favourite' : ''}`;

  return (
    <div className={className}>
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
  highlightFavourite: PropTypes.bool,
};

SkillBar.defaultProps = {
  highlightFavourite: false,
};

export default SkillBar;
