import { Suspense } from "react";
import "./App.css";
import Countries from "./compos/countries/Countries";

const apiCountries = "https://openapi.programming-hero.com/api/all";
const promiseCountries = fetch(apiCountries).
  then((resp) => resp.json());

function App() {
  return (
    <>
      <h1>React World on the Go</h1>

      <Suspense fallback={<h2>Loading Countries...</h2>}>
        <Countries  promiseCountries = {promiseCountries}/>
      </Suspense> 

    </>
  );
}

export default App;
