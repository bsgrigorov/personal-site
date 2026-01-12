import dayjs from 'dayjs';

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
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <img src={data.image} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
