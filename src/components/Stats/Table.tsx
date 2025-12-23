import TableRow from './TableRow';
import { StatData } from './types';

interface TableProps {
  data: StatData[];
}

const Table = ({ data }: TableProps) => (
  <table>
    <tbody>
      {data.map((pair) => (
        <TableRow
          format={pair.format}
          key={pair.label}
          label={pair.label}
          link={pair.link}
          value={pair.value}
        />
      ))}
    </tbody>
  </table>
);

export default Table;
