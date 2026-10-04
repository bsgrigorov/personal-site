import dayjs from 'dayjs';

import { withBasePath } from '@/utils/basePath';

export interface Project {
  title: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

interface CellProps {
  data: Project;
  id?: string;
}

const Cell = ({ data, id }: CellProps) => (
  <div className="cell-container" id={id}>
    <article className="mini-post">
      <header>
        <h3>
          {data.link ? <a href={data.link}>{data.title}</a> : data.title}
        </h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      {data.link ? (
        <a href={data.link} className="image">
          <img src={withBasePath(data.image)} alt={data.title} />
        </a>
      ) : (
        <div className="image">
          <img src={withBasePath(data.image)} alt={data.title} />
        </div>
      )}
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
