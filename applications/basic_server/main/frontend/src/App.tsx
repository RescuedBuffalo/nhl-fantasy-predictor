import React, { useState } from 'react';
import './App.css';
import DataTable from './DataTable';
import { PlayerDetails } from './types';


const App = () => {
  const [data, setData] = useState<{[key: string]: PlayerDetails}>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const baseUrl = process.env.REACT_APP_DATA_COLLECTION_SERVER;
      const response = await fetch(`${baseUrl}/fetch_nhl_goal_leaders`);
      const jsonData = await response.json();
      setData(jsonData);
      setError('');
    } catch (err) {
      setError('Failed to fetch data.');
      setData({});
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchData} 
          disabled={loading}
          style={{ 
            marginTop: '20px', 
            position: 'absolute', 
            left: '50%', 
            transform: 'translateX(-50%)' 
            }}
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      <DataTable data={data}/>
    </div>
  );
}

export default App;
