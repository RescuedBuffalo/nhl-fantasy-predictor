import React, { useState } from 'react';
import './App.css';
import DataTable from './DataTable';

const App = () => {
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
    };

  return (
    <div className="App">
      <button onClick={fetchData} style={{ marginTop: '20px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        Fetch Data
      </button>
      <DataTable data={data}/>
    </div>
  );
}

export default App;
