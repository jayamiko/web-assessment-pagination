import React from 'react';
import './style.css';
import Card from './components/Card';
import Pagination from './components/Pagination';
import DataTable from './components/DataTable';

export const App = () => {
  return (
    <div className="container">
      <Card />
      <Pagination />

      <br />
      <br />
      <br />

      {/* DATATABLE */}
      <DataTable />
    </div>
  );
};

export default App;
