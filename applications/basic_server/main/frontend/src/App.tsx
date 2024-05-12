import React from 'react';
import './App.css';
import DataTable from './DataTable';

const App = () => {
  return (
    <div className="App">
      <button style={{ marginTop: '20px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        Fetch Data
      </button>
      <DataTable />
    </div>
  );
}

export default App;
