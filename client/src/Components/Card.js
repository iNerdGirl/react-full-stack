import React from 'react';

const Card = ({ title, isbn, image_url, firstName, lastName, qty, cost }) => {
  return <div className="container card text-white bg-primary mb-3">
      <div className="card-header">{isbn}</div>
      <div className="card-body">
        <img src={image_url} alt={title} />
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
          by: {firstName} {lastName}{' '}
          Quantity: {qty} Cost: ${cost}
        </p>
        <br/>
      </div>
    </div>;
}

export default Card;