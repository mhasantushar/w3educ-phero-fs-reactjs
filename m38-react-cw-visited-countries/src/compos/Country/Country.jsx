import React from "react";
import "./Country.css";

const Country = ({ country, handleVisitedList }) => {
  // console.log(country);
  // console.log(handleVisitedList);

  const [visited, setVisited] = React.useState(false);
  const handleVisit = () => {
    // console.log("Visited Country: ", country.name.common);
    setVisited(!visited);
    handleVisitedList(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h4>Name: {country.name.common}</h4>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Captital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}
        {country.area.area > 100000
          ? ", this is a large country."
          : ", this is a small country."}{" "}
      </p>
      <button onClick={handleVisit}>
        {visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
