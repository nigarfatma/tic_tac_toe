import React, { useState, useEffect } from "react";
import "./css/style.css";

function Tempapp() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [displayedCity, setDisplayedCity] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=016dc90a1f1e98d6d2d26d3c82eddee7`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      console.log(resJson, "resJson");
    };
    fetchApi();
  }, [search]);

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    setDisplayedCity(inputValue);
  };

  const handleClearSearch = () => {
    setSearch("");
    setDisplayedCity("");
  };

  return (
    <>
      <div className="box">
        <div className="inputData">
        <h4 className="heading">Search City</h4>
          <div className="inputFieldContainer">
      
            <input
              type="text"
              name=""
              id=""
              value={displayedCity}
              className="inputField"
              onChange={handleSearch}
            />
            {displayedCity && (
              <button className="clearButton" onClick={handleClearSearch}>
                <i className="fa-solid fa-times"></i>
              </button>
            )}
          </div>
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {displayedCity}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel
              </h3>
            </div>
            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
          </>
        )}
      </div>
    </>
  );
}

export default Tempapp;
