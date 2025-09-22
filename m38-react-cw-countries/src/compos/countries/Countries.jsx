import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ promiseCountries }) => {
  const countriesData = use(promiseCountries);
  const countries = countriesData.countries;
  // console.log(countries);

  const [VisitedList, setVisitedList] = useState([]);
  const handleVisitedList = (country) => {
    // console.log("Handled country visit:", country);
    setVisitedList([...VisitedList, country]);
    // console.log("List Visited:", VisitedList);
  }

  return (
    <div>
      <h2>Countries Listed: {countries.length}</h2>
      <h3>Visited: {VisitedList.length}</h3>

      {
        VisitedList.map((country) => <span key={country.ccn3.ccn3}>{country.name.common}, </span>)
      }
      <div className="countries">
        {
          countries.map((country) => (<
            Country key={country.ccn3.ccn3} 
            country={country} 
            handleVisitedList = {handleVisitedList}
            />))
        }
      </div>
    </div>
  );
};

export default Countries;
