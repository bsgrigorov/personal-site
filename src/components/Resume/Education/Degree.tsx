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

const Degree = ({ data }: DegreeProps) => (
  <article className="resume-entry">
    <header className="resume-entry-header">
      <div className="resume-entry-main-line">
        <div className="resume-entry-left">
          <span className="resume-entry-title">
            <a href={data.link}>{data.school}</a>
          </span>
          <span className="resume-entry-location">{data.location}</span>
        </div>
        <span className="resume-entry-date">{data.year}</span>
      </div>
      <div className="resume-entry-subtitle">
        {data.degree}, {data.specialization}
      </div>
    </header>
  </article>
);

export default Degree;
