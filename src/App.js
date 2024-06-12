import React from 'react';
import './style.css';
import Card from './components/Card';
import Pagination from './components/Pagination';
import { products } from './data/data';

export const App = () => {
  return (
    <div className="container">
      <Card />
      <Pagination />
    </div>
  );
};

export default App;
