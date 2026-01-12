import Image from 'next/image';
import dayjs from 'dayjs';

import { withBasePath } from '@/utils/basePath';

export interface Certification {
  label: string;
  link: string;
  image: string;
  date: string;
}

interface BadgeProps {
  data: Certification;
  id?: string;
}

const Badge = ({ data, id }: BadgeProps) => (
  <div className="cell-container" id={id}>
    <div className="badge">
      <a href={data.link} className="image" aria-label={data.label}>
        <Image src={withBasePath(data.image)} alt={data.label} width={200} height={200} />
      </a>
      <header>
        <h3>
          {/* Skip tab on text link - image link is the primary focusable element */}
          <a href={data.link} tabIndex={-1}>
            {data.label}
          </a>
        </h3>
        <time className="published">{dayjs(data.date).format('MMM YYYY')}</time>
      </header>
    </div>
  </div>
);

export default Badge;
