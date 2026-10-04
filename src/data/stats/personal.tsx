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

  return <span className="age-counter">{age}</span>;
};

const careerStart = new Date('2016-07-01T00:00:00');

const YearsInTech = () => {
  const [years, setYears] = useState<string>();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
    setYears(((Date.now() - careerStart.getTime()) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <span className="age-counter">{years}</span>;
};

const data: StatData[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'experience',
    label: 'Years in tech',
    value: <YearsInTech />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 38,
    link: '/about',
  },
  {
    key: 'location',
    label: 'Current city',
    value: siteConfig.location,
  },
];

export default data;
