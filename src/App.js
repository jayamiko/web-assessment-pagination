import React from 'react';
import './style.css';
import Card from './components/Card';
import Pagination from './components/Pagination';
import { products } from './data/data.js';

export const App = () => {
  return (
    <div className="container">
      {products.map((x) => {
        return <Card />;
      })}
      <Pagination />
    </div>
  );
};

export default App;
