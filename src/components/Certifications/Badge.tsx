import React from 'react';
import dayjs from 'dayjs';

export interface Certification {
  label: string;
  link: string;
  image: string;
  date: string;
}

interface BadgeProps {
  data: Certification;
}

const Badge: React.FC<BadgeProps> = ({ data }) => (
  <div className="cell-container">
    <div className="badge">
      <a href={data.link} className="image">
        <img src={data.image} alt={data.label} />
      </a>
      <header>
        <h3>
          <a href={data.link}>{data.label}</a>
        </h3>
        <time className="published">{dayjs(data.date).format('MMM YYYY')}</time>
      </header>
    </div>
  </div>
);

export default Badge;
