'use client';

import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <h3>About me</h3>
    <Table data={data} />
  </>
);

export default PersonalStats;
