export interface CourseData {
  title: string;
  number: string;
  link: string;
  university: string;
}

interface CourseProps {
  data: CourseData;
  last?: boolean;
}

const Course = ({ data, last = false }: CourseProps) => (
  <li className="course-container">
    <p className="course-name">{data.title}</p>
    {!last && (
      <div className="course-dot">
        <p className="course-name"> &#8226;</p>
      </div>
    )}
  </li>
);

export default Course;
