import React, { ReactNode } from 'react';

interface TableRowProps {
  label: string;
  link?: string;
  value?: ReactNode | number | string;
  format?: (value: ReactNode | number | string | undefined) => ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ label, link, value, format = (x) => x }) => (
  <tr>
    <td width="70%">{label}</td>
    <td>{link ? <a href={link}>{format(value)}</a> : format(value)}</td>
  </tr>
);

export default TableRow;
