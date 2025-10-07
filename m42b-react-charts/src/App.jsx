import React from "react";
import "./App.css";
import ResultChart from "./components/ResultChart";

function App() {
  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl">Result Chart</h1>
        <ResultChart />
      </div>
    </>
  );
}

export default App;
