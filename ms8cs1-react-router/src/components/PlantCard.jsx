import React from "react";
import { Link, useNavigate } from "react-router";

const PlantCard = ({ plant }) => {
  // console.log (plant);
  const { id, image, name, category, price } = plant;

  const navigate = useNavigate();
  // this will be used to navigate to the target page using button
  // option-2 below

  return (
    <article className="bg-base-100 shadow-sm card">
      <figure className="h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Category: {category}</p>
        <p>price: ${price}</p>
        <div className="justify-end card-actions">
          {/* OPTION 1: USE LINK TO... */}
          <Link to={`/plant/${id}`} className="btn btn-primary">
            View Details (option 1)
          </Link>

          {/* OPTION 2: PROGRAMMATICALLY usinn NAVIGATE hook VIA BUTTON... */}
          <button
            onClick={() => navigate(`/plant/${id}`)}
            className="btn btn-primary"
          >
            View Details (option 2)
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlantCard;
