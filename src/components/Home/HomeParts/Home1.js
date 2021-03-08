import React from "react";
import style from "./Home1.module.css";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { CgCompressV } from "react-icons/cg";
import MapMain from "./MapMain";

function Home1({ information }) {
  const curentTime = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    month: "long",
    day: "numeric",
  };
  const listRender = () => {
    return (
      <div className={style.lists}>
        <h5>{curentTime.toLocaleDateString("en-EN", options)}</h5>
        <h3>
          {information.city.name}, {information.city.country}
        </h3>
        <h5>
          Feels like {Math.floor(information.list[0].main.feels_like - 273.15)}
          <sup>°</sup>C . {information.list[0].weather[0].description} .{" "}
          {information.list[0].weather[0].main} air .
        </h5>
        <div className={style.flex}>
          <div className={style.first}>
            <img
              src={`http://openweathermap.org/img/w/${information.list[0].weather[0].icon}.png`}
              alt="icon"
            />
            <h1>
              {(information.list[0].main.temp - 273.15).toFixed(0)}
              <sup>°</sup>C
            </h1>
          </div>
          <div className={style.vertical}></div>
          <div className={style.info}>
            <div className={style.firstrow}>
              <h5>
                <BsChevronDoubleLeft /> {information.list[0].wind.speed}m/s E
              </h5>
              <h5>
                <CgCompressV /> {information.list[0].main.pressure}hPa
              </h5>
            </div>
            <div className={style.secondrow}>
              <h5>Humidity: {information.list[0].main.humidity}%</h5>
              <h5>
                Dew Point:{" "}
                {(information.list[0].main.temp - 273.15).toFixed(0) / 2}
                <sup>°</sup>C{" "}
              </h5>
            </div>
            <div className={style.thirdrow}>
              <h5>Visibility: {information.list[0].visibility / 1000}km</h5>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const mapRender = () => {
    return <MapMain coord={information.city.coord} />;
  };
  return (
    <div className={style.main}>
      {information.city && listRender()}
      {information.city && mapRender()}
    </div>
  );
}

export default Home1;
