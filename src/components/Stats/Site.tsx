'use client';

import { useState, useCallback, useEffect } from 'react';

import { siteConfig } from '@/data/config';

import Table from './Table';
import initialData from '../../data/stats/site';
import { StatData } from './types';

interface GitHubRepoData {
  [key: string]: string | number;
}

const Site = () => {
  const [data, setResponseData] = useState<StatData[]>(initialData);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`https://api.github.com/repos/${siteConfig.github.username}/${siteConfig.github.repoName}`);
      const resData: GitHubRepoData = await res.json();
      setResponseData(
        initialData.map((field) => ({
          ...field,
          value:
            field.key && Object.keys(resData).includes(field.key)
              ? resData[field.key]
              : field.value,
        })),
      );
    } catch (error) {
      console.error('Failed to fetch GitHub data:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h3>About this site</h3>
      <Table data={data} />
    </div>
  );
};

export default Site;
