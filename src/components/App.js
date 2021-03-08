import React, { useEffect, useState } from "react";
import Main from "./Home/Main";
import Search from "./Search/Search";
import axios from "axios";

function App() {
  const [information, setInformation] = useState([]);
  const inputHandler = (nameOfCity) => {
    const options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/forecast",
      params: { q: nameOfCity },
      headers: {
        "x-rapidapi-key": "4bafd5827bmsh91f4f6fc727d0fcp108a3cjsn8f2883a16ce8",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setInformation(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/forecast",
      params: { q: "Moscow" },
      headers: {
        "x-rapidapi-key": "4bafd5827bmsh91f4f6fc727d0fcp108a3cjsn8f2883a16ce8",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setInformation(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="ui container">
      <Search inputHandler={inputHandler} />
      <Main information={information} />
    </div>
  );
}

export default App;
