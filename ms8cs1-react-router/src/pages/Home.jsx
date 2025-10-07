// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../components/PlantCard";

const Home = () => {
  // const [plantsData, setPlantsData] = useState([]);

  // useEffect(() => {
  //   fetch("https://openapi.programming-hero.com/api/plants")
  //     .then((resp) => resp.json())
  //     .then((data) => setPlantsData(data?.plants));
  // }, []);
  // // console.log(plantsData);

  const plantsDataLoad = useLoaderData();
  // console.log(plantsDataLoad);
  const plantsData = plantsDataLoad.plants;
  // console.log(plantsData);
  // CAN PERFORM A RESTRUCTURE AS WELL: const {plantData} = useLoaderData();

  return (
    <div>
      <h1 className="my-8 text-2xl">
        Home
      </h1>

      <div className='gap-8 grid grid-cols-3'>
        {plantsData.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
