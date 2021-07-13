import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import uniqueId from "lodash/uniqueId";

import {
  iosSunnyOutline,
  iosPartlysunnyOutline,
  iosCloudyOutline,
  iosRainyOutline,
  iosSnowy,
} from "react-icons-kit/ionicons/";

// const weathers = [
//   {
//     id: 0,
//     weather: (
//       <Icon icon={weatherSunny} size={30} style={{ color: "#c6d6df" }} />
//     ),
//   },
// ];

const weathers = [
  { id: 1, weather: iosSunnyOutline, color: "#e32119" },
  { id: 2, weather: iosPartlysunnyOutline, color: "#ff8a00" },
  { id: 3, weather: iosCloudyOutline, color: "#989898" },
  { id: 4, weather: iosRainyOutline, color: "#0099e5" },
  { id: 5, weather: iosSnowy, color: "#44c7f4" },
];

const WeathersBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  margin: auto 0;
`;

const WeatherUnit = styled.div`
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

const WeatherModal = ({ 
  weatherData, 
  selectedWeatherId, 
  isEditing,
  setWeatherChosen,
  weatherChosen,
  isWeatherSelected,
  setIsWeatherSelected
}) => {

  useEffect(() => {
      weatherData(selectedWeatherId);
  }, [isEditing === false])
  
  if (selectedWeatherId && isEditing === false) {
    return (
      <>
        <div
          className="weather-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <WeathersBody className="weathers-body">
            {weathers.map((weather) => {
              return (
                <WeatherUnit key={uniqueId()}>
                  <Icon
                    icon={weather.weather}
                    // size={idx === weatherChosen ? 35 : 32}
                    size={32}
                    style={{
                      color:
                        weather.id === selectedWeatherId ? weather.color : "#8a959e",
                      backgroundColor:
                        weather.id === selectedWeatherId
                          ? weather.color + "45"
                          : "transparent",
                      borderRadius: "50%",
                      fontWeight: 400,
                    }}
                  />
                </WeatherUnit>
              );
            })}
          </WeathersBody>
        </div>
      </>
    );
  } 
  else if (selectedWeatherId && isEditing === true) {
    return (
      <>
        <div
          className="weather-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <WeathersBody className="weathers-body">
            {weathers.map((weather) => {
              return (
                <WeatherUnit key={uniqueId()}>
                  <Icon
                    icon={weather.weather}
                    // size={idx === weatherChosen ? 35 : 32}
                    size={32}
                    onClick={() => {
                      setWeatherChosen(weather.id);
                      weatherData(weather.id);
                    }}
                    style={{
                      color:
                        weather.id === weatherChosen ? weather.color : "#8a959e",
                      backgroundColor:
                        weather.id === weatherChosen
                          ? weather.color + "45"
                          : "transparent",
                      borderRadius: "50%",
                      fontWeight: 400,
                    }}
                  />
                </WeatherUnit>
              );
            })}
          </WeathersBody>
        </div>
      </>
    );
  } 
  else {
    return (
      <>
        <div
          className="weather-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <WeathersBody className="weathers-body">
            {weathers.map((weather) => {
              return (
                <WeatherUnit key={uniqueId()}>
                  <Icon
                    icon={weather.weather}
                    // size={idx === weatherChosen ? 35 : 32}
                    size={32}
                    onClick={() => {
                      setWeatherChosen(weather.id);
                      weatherData(weather.id);
                    }}
                    style={{
                      color:
                        weather.id === weatherChosen ? weather.color : "#8a959e",
                      backgroundColor:
                        weather.id === weatherChosen
                          ? weather.color + "45"
                          : "transparent",
                      borderRadius: "50%",
                      fontWeight: 400,
                    }}
                  />
                </WeatherUnit>
              );
            })}
          </WeathersBody>
        </div>
      </>
    );
  }
  
};

export default WeatherModal;
