import React, { useEffect } from "react";
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

const weathers = [
  { id: 1, weather: iosSunnyOutline, color: "#e32119" },
  { id: 2, weather: iosPartlysunnyOutline, color: "#ff8a00" },
  { id: 3, weather: iosCloudyOutline, color: "#989898" },
  { id: 4, weather: iosRainyOutline, color: "#0099e5" },
  { id: 5, weather: iosSnowy, color: "#44c7f4" },
];

const Weather = ({
  setWeatherChosen,
  selectedDiary,
  isEditing,
  weatherChosen,
}) => {
  return (
    <>
      <div
        className="weather-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <WeathersBody>
          {weathers.map((weather) => {
            return (
              <IconWrapper
                key={uniqueId()}
                onClick={() => {
                  if (selectedDiary !== undefined && isEditing === false) {
                    return null;
                  } else {
                    setWeatherChosen(weather.id);
                  }
                }}
                id={weather.id}
                color={weather.color}
                weatherChosen={weatherChosen}
                selectedDiary={selectedDiary}
                isEditing={isEditing}
              >
                <Icon icon={weather.weather} />
              </IconWrapper>
            );
          })}
        </WeathersBody>
      </div>
    </>
  );
  // }
};

export default React.memo(Weather);

const IconWrapper = styled.div`
  svg {
    cursor: pointer;
    width: 3.7rem;
    height: 3.7rem;
    fill: ${(props) =>
      props.id === props.weatherChosen ? props.color : "#8a959e"};

    background-color: ${(props) =>
      props.id === props.weatherChosen ? props.color + "45" : "transparent"};

    border-radius: 50%;

    &:hover {
      transform: ${(props) =>
        props.selectedDiary !== undefined && props.isEditing === false
          ? "none"
          : "scale(1.1)"};
    }

    &:active {
      transform: ${(props) =>
        props.selectedDiary !== undefined && props.isEditing === false
          ? "none"
          : "scale(1)"};
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

    @media screen and (max-width: 418px) {
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

const IconWrapperView = styled.div`
  svg {
    cursor: pointer;
    width: 3.7rem;
    height: 3.7rem;
    fill: ${(props) =>
      props.id === props.weatherChosen ? props.color : "#8a959e"};

    background-color: ${(props) =>
      props.id === props.weatherChosen ? props.color + "45" : "transparent"};

    border-radius: 50%;

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

    @media screen and (max-width: 418px) {
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
