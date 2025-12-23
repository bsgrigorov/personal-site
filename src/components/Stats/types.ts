import { ReactNode } from 'react';

export interface StatData {
  label: string;
  key?: string;
  link?: string;
  value?: ReactNode | number | string;
  format?: (value: ReactNode | number | string | undefined) => ReactNode;
}
