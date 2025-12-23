import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

export interface JobData {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

interface JobProps {
  data: JobData;
}

const Job = ({
  data: { name, position, url, startDate, endDate, summary, highlights },
}: JobProps) => (
  <article className="jobs-container">
    <header>
      <h4>
        <a href={url}>{name}</a> - {position}
      </h4>
      <p className="daterange">
        {dayjs(startDate).format('MMMM YYYY')} -{' '}
        {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
      </p>
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
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

export default Job;
