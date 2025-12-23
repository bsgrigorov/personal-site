import React from 'react';

const GOLDEN = '#ffd700';

export interface SkillData {
  title: string;
  competency: number;
  favourite?: boolean;
}

interface SkillBarProps {
  data: SkillData;
  color: string;
  highlightFavourite?: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ data, color, highlightFavourite = false }) => {
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
      <div className="skillbar-title" style={titleStyle}>
        <span>{title}</span>
      </div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skill-bar-percent">{competency} / 5</div>
    </div>
  );
};

export default SkillBar;
