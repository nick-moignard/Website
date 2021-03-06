import React, { useMemo } from 'react';

import Team from './components/team';
import Quarters from './components/quarters';

import './Roadmap.scss';

import data from './sample.json';

const colors = ['#007bff', '#dc3545', '#28a745', '#ffc107', '#17a2b8', '#6c757d'];

const Roadmap = () => {
  const getTeamColor = useMemo(
    () => (index: number) => {
      const colorIndex = index % colors.length;
      return colors[colorIndex];
    },
    [],
  );

  const _data = JSON.parse(JSON.stringify(data));

  return (
    <div className="Roadmap">
      <div className="d-flex fled-row">
        <div className="flex-1"></div>
        <Quarters />
      </div>
      <div className="teams">
        {Object.keys(_data).map((key: string, index: number) => (
          <Team key={index} data={_data[key]} teamName={key} color={getTeamColor(index)} />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
