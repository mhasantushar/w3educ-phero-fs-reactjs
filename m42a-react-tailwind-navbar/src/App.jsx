import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pricing from "./components/pricing";
import Chart from "./components/Chart";

const pricingPlansPromise = fetch("/pricing.json").then((pricingPlanResponse) =>
  pricingPlanResponse.json()
);

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <Pricing pricingPlansPromise={pricingPlansPromise} />
        </Suspense>

        <Chart/>
      </main>
    </>
  );
}

export default App;
