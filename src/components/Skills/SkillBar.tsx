export interface SkillData {
  title: string;
  competency: number;
  favourite?: boolean;
}

interface SkillBarProps {
  data: SkillData;
  color: string;
  highlightFavourite?: boolean;
  id?: string;
}

const SkillBar = ({ data, color, highlightFavourite = false, id }: SkillBarProps) => {
  const { competency, title } = data;

  const titleStyle = {
    background: color,
  };

  const barStyle = {
    background: color,
    width: `${Math.min(100, Math.max((competency / 5.0) * 100.0, 0))}%`,
  };

  const className = `skillbar clearfix${highlightFavourite ? ' favourite' : ''}`;

  return (
    <div className={className} id={id}>
      <div className="skillbar-title" style={titleStyle}>
        <span>{title}</span>
      </div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skill-bar-percent">{competency} / 5</div>
    </div>
  );
};

export default SkillBar;
