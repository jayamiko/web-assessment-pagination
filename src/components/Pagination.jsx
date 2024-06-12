import React from 'react';
import { products } from '../data/data';
import Button from './Button';

export const Pagination = () => {
  return (
    <div className="pagination">
      <Button name="start">{'<<'}</Button>
      <Button name="prev" styles="prevbtn">
        Prev
      </Button>
      {products.map((x, i) => {
        return (
          <Button key={i} name={x.name}>
            {x.id}
          </Button>
        );
      })}
      <Button name="next" styles="nextbtn">
        Next
      </Button>
      <Button name="end">{'>>'}</Button>
    </div>
  );
};

export default Pagination;
