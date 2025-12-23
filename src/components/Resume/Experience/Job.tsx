import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

export interface JobData {
  name: string;
  position: string;
  url: string;
  location?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

interface JobProps {
  data: JobData;
}

const Job = ({
  data: { name, position, url, location, startDate, endDate, summary, highlights },
}: JobProps) => (
  <article className="resume-entry">
    <header className="resume-entry-header">
      <div className="resume-entry-main-line">
        <div className="resume-entry-left">
          <span className="resume-entry-title">
            <a href={url}>{name}</a>
          </span>
          {location && <span className="resume-entry-location">{location}</span>}
        </div>
        <span className="resume-entry-date">
          {dayjs(startDate).format('MMM YYYY')} – {endDate ? dayjs(endDate).format('MMM YYYY') : 'Present'}
        </span>
      </div>
      <div className="resume-entry-subtitle">{position}</div>
    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}
    {highlights ? (
      <ul className="resume-entry-points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

export default Job;
