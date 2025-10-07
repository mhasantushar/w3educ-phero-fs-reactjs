import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
  // console.log (plant);
  const { id, image, name, category, price } = plant;

  return (
    <article className='bg-base-100 shadow-sm card'>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full h-full object-cover'
          src={image}
          alt={name}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>Category: {category}</p>
        <p>price: ${price}</p>
        <div className='justify-end card-actions'>
          {/* <button className='btn btn-primary'>View Details</button> */}
          <Link to={`/plant/${id}`} className='btn btn-primary'>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default PlantCard;
