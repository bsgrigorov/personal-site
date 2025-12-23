import Image from 'next/image';
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

const Badge = ({ data }: BadgeProps) => (
  <div className="cell-container">
    <div className="badge">
      <a href={data.link} className="image">
        <Image src={data.image} alt={data.label} width={200} height={200} />
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
