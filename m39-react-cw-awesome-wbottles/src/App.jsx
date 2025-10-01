import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/Bottles";

function App() {
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
