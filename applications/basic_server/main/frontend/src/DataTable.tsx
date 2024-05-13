import React from 'react';
import { PlayerDetails, DataTableProps } from './types';



const DataTable: React.FC<DataTableProps> = ( {data} ) => {
  return (
    <table style={{ width: '100%', marginTop: '60px' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Team</th>
          <th>Goals</th>
        </tr>
      </thead>
      <tbody>
      {Object.entries(data).map(([playerId, details]) => (
          <tr key={playerId}>
            <td>{playerId}</td>
            <td>{details.player_name}</td>
            <td>{details.position}</td>
            <td>{details.team}</td>
            <td>{details.goals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
