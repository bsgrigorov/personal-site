import Degree, { DegreeData } from './Education/Degree';

interface EducationProps {
  data: DegreeData[];
}

const Education = ({ data = [] }: EducationProps) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map((degree) => (
      <Degree data={degree} key={degree.school} />
    ))}
  </div>
);

export default Education;
