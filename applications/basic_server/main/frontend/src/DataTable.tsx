import React from 'react';

const DataTable = ( {data} ) => {
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
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.position}</td>
            <td>{item.team}</td>
            <td>{item.goals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
