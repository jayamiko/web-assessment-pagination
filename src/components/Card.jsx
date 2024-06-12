import React from 'react';

export const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="thumbnail">
        <h2 className="title">{data.name}</h2>
        <img src={data.image.url} />
      </div>
      <div className="box_info">
        <div className="box_label">
          <label className="price">Rp. {data.price}</label>
          <label className="release_date">
            {data.sold} Sold | {data.stock} Stock
          </label>
        </div>
        <span className="storage">{data.storage}</span>
        <p className="description">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
