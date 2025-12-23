import React from 'react';

export interface DegreeData {
  school: string;
  degree: string;
  link: string;
  location: string;
  year: number;
  specialization: string;
}

interface DegreeProps {
  data: DegreeData;
}

const Degree: React.FC<DegreeProps> = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="school">
        <a href={data.link}>{data.school}</a>, {data.year}
      </h4>
      <p className="location">{data.location}</p>
      <p className="degree">{data.degree}</p>
      <p className="specialization">{data.specialization}</p>
    </header>
  </article>
);

export default Degree;
