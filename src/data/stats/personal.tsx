'use client';

import { useState, useEffect } from 'react';

import { StatData } from '@/components/Stats/types';
import { siteConfig } from '@/data/config';

const Age = () => {
  const [age, setAge] = useState<string>();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = siteConfig.birthday;
    setAge(((Date.now() - birthTime.getTime()) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
};

const data: StatData[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 34,
    link: '/about',
  },
  {
    key: 'location',
    label: 'Current city',
    value: siteConfig.location,
  },
];

export default data;
