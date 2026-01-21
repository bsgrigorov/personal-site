import Job, { JobData } from './Experience/Job';

interface ExperienceProps {
  data: JobData[];
}

const Experience = ({ data = [] }: ExperienceProps) => (
  <div className="experience">
    <div className="title">
      <h3>Experience</h3>
    </div>
    {data.map((job, idx) => (
      <Job data={job} key={`${job.name}-${job.position}`} id={`work-${idx}`} />
    ))}
  </div>
);

export default Experience;
