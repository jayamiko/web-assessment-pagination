import React from 'react';

export const Card = () => {
  return (
    <div className="card">
      <div className="thumbnail">
        <h2 className="title">[product_name]</h2>
        <img src={null} />
      </div>
      <div className="box_info">
        <div className="box_label">
          <span className="brand">[brand_name]</span>
          <label className="brand">[sold] Sold | [stock] Stock</label>
        </div>
        <div className="box_label">
          <label className="price">Rp. [price]</label>
          <span className="storage">[storage] GB</span>
        </div>
        <p className="description">[description]</p>
      </div>
    </div>
  );
};

export default Card;
