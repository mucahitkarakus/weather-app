import React from "react";
import {WeatherDetails} from "./index";

const WeatherData = ({weatherData}) => {
  const iconUrlCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;
  return (
    <div className="max-w-screen-md mx-auto">
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex">
          <p className="font-semibold">
            <span className="text-2xl">{weatherData.name}</span>
            {"   "}
            <span className="text-xl">{weatherData.sys.country}</span>
          </p>
        </div>
        <div className="mt-5">
          <div className="flex flex-col items-center ">
            <p className="">{weatherData.weather[0].main}</p>
            <img
              src={iconUrlCode(weatherData.weather[0].icon)}
              alt="weather icon"
              className="h-[5rem]"
            />
            <p>{(((weatherData.main.temp - 32) * 5) / 9).toFixed(0)}°</p>
            <div className="flex flex-col items-center mt-2 gap-[.2rem]">
              {/* */}
              <WeatherDetails
                title="Real fell"
                data={(((weatherData.main.temp - 32) * 5) / 9).toFixed(0)}
                unit="°"
              />
              <WeatherDetails
                title="Humudity"
                data={weatherData.main.humidity}
                unit="%"
              />
              <WeatherDetails
                title="Wind"
                data={weatherData.wind.speed}
                unit=" km/h"
              />
              {/* */}
            </div>
            <div>
              <WeatherDetails
                title="Wind"
                data={weatherData.wind.speed}
                unit=" km/h"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
