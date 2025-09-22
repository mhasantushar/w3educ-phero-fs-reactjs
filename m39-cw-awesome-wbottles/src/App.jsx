import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/Bottles";

function App() {
  // const bottles = [
  //   { id: 1, name: 'EcoBottle', price: 15.99, material: 'Stainless Steel', capacity: '500ml' },
  //   { id: 2, name: 'HydroFlask', price: 29.99, material: 'Plastic', capacity: '750ml' },
  //   { id: 3, name: 'ThermoBottle', price: 25.50, material: 'Aluminum', capacity: '600ml' },
  //   { id: 4, name: 'AquaPure', price: 12.75, material: 'Glass', capacity: '400ml' },
  // ];

  const apiBottles =
    "https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json";

  // const promiseBottles = fetch("./waterbottles.json")
  //   .then((resp) => resp.json());
  const promiseBottlesApi = fetch(apiBottles).then((resp) => resp.json());

  return (
    <>
      <h1>Awsome Water Bottles for Sale</h1>

      <Suspense fallback={<div>Bottle data loading...</div>}>
        <Bottles promiseBottles={promiseBottlesApi} />
      </Suspense>
    </>
  );
}

export default App;
