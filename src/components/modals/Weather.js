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

const WeatherModal = ({
  weatherData,
  selectedWeatherId,
  isEditing,
  // setWeatherChosen,
  weatherChosen,
}) => {
  console.log("from weather");

  useEffect(() => {
    weatherData(selectedWeatherId);
  }, [isEditing === false]);

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
                    size={37}
                    style={{
                      color:
                        weather.id === selectedWeatherId
                          ? weather.color
                          : "#8a959e",
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
  } else if (selectedWeatherId && isEditing === true) {
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
                    size={37}
                    onClick={() => {
                      // setWeatherChosen(weather.id);
                      weatherData(weather.id);
                    }}
                    style={{
                      color:
                        weather.id === weatherChosen
                          ? weather.color
                          : "#8a959e",
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
  } else {
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
                <IconWrapper
                  key={uniqueId()}
                  onClick={() => {
                    weatherData(weather.id);
                  }}
                  id={weather.id}
                  color={weather.color}
                  weatherChosen={weatherChosen}
                >
                  <Icon
                    icon={weather.weather}
                    // size={37}

                    // style={{
                    //   color:
                    //     weather.id === weatherChosen
                    //       ? weather.color
                    //       : "#8a959e",
                    //   backgroundColor:
                    //     weather.id === weatherChosen
                    //       ? weather.color + "45"
                    //       : "transparent",
                    //   borderRadius: "50%",
                    // }}
                  />
                </IconWrapper>
                // <WeatherUnit key={uniqueId()}>
                //   <Icon
                //     icon={weather.weather}
                //     // size={idx === weatherChosen ? 35 : 32}
                //     size={37}
                //     onClick={() => {
                //       // setWeatherChosen(weather.id);
                //       weatherData(weather.id);
                //     }}
                //     style={{
                //       color:
                //         weather.id === weatherChosen
                //           ? weather.color
                //           : "#8a959e",
                //       backgroundColor:
                //         weather.id === weatherChosen
                //           ? weather.color + "45"
                //           : "transparent",
                //       borderRadius: "50%",
                //       fontWeight: 400,
                //     }}
                //   />
                // </WeatherUnit>
              );
            })}
          </WeathersBody>
        </div>
      </>
    );
  }
};

export default React.memo(WeatherModal);

const IconWrapper = styled.div`
  svg {
    width: 3.7rem;
    height: 3.7rem;
    fill: ${(props) =>
      props.id === props.weatherChosen ? props.color : "#8a959e"};

    background-color: ${(props) =>
      props.id === props.weatherChosen ? props.color + "45" : "transparent"};

    border-radius: 50%;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(1);
    }

    @media screen and (max-width: 489px) {
      & {
        width: 3.5rem;
        height: 3.5rem;
      }
    }

    @media screen and (max-width: 464px) {
      & {
        width: 3.3rem;
        height: 3.3rem;
      }
    }

    @media screen and (max-width: 439px) {
      & {
        width: 3.1rem;
        height: 3.1rem;
      }
    }

    @media screen and (max-width: 414px) {
      & {
        width: 2.9rem;
        height: 2.9rem;
      }
    }

    @media screen and (max-width: 389px) {
      & {
        width: 2.7rem;
        height: 2.7rem;
      }
    }

    @media screen and (max-width: 364px) {
      & {
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    @media screen and (max-width: 339px) {
      & {
        width: 2.3rem;
        height: 2.3rem;
      }
    }
  }
`;

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
