import React from "react";
import { useLoaderData } from "react-router";
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router";

const PlantInfo = () => {
  // const { id } = useParams();
  // // console.log(id);

  // const [plantData, setPlantData] = useState({});

  // useEffect(() => {
  //   //   fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  //   //     .then((resp) => resp.json())
  //   //     .then((data) => setPlantData(data?.plants));

  //   // TRYING EXIOS INSTEAD TO FETCH DATA..
  //   axios(`https://openapi.programming-hero.com/api/plant/${id}`)
  //   .then((data) => setPlantData(data?.data?.plants)
  //   );
  // }, [id]);
  // console.log(plantData);
  // const { name, image, description, category, price } = plantData;

  // USING MODERN STYLE...
  const { data } = useLoaderData();
  // console.log(data);
  const { name, image, description, category, price } = data.plants;

  return (
    <div>
      <h1 className="my-8 text-2xl">Plant Details</h1>
      <div className="bg-base-100 shadow-sm mx-auto max-w-4xl card">
        <figure className="max-h-120 overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantInfo;
