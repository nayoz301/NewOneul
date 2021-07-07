import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import {
  weatherSunny,
  weatherCloudy,
  weatherPartlySunny,
  weatherShower,
  weatherSnow,
} from "react-icons-kit/typicons/";

// const weathers = [
//   {
//     id: 0,
//     weather: (
//       <Icon icon={weatherSunny} size={30} style={{ color: "#c6d6df" }} />
//     ),
//   },
// ];

const weathers = [
  { id: 0, weather: weatherSunny, color: "#f96854" },
  { id: 1, weather: weatherPartlySunny, color: "#ffb900" },
  { id: 2, weather: weatherCloudy, color: "#a5a9ab" },
  { id: 3, weather: weatherShower, color: "#0099e5" },
  { id: 4, weather: weatherSnow, color: "#90cef1" },
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
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

const WeatherModal = () => {
  const [weatherChosen, setWeatherChosen] = useState(null);
  // console.log("바깥 콘솔", weatherChosen);

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
          {weathers.map((weather, idx) => {
            return (
              <WeatherUnit key={idx}>
                <Icon
                  icon={weather.weather}
                  size={idx === weatherChosen ? 30 : 26}
                  onClick={() => {
                    setWeatherChosen(idx);
                  }}
                  style={{
                    color: idx === weatherChosen ? weather.color : "#c6d6df",
                  }}
                />
              </WeatherUnit>
            );
          })}
        </WeathersBody>
      </div>
    </>
  );
};

export default WeatherModal;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { Icon } from "react-icons-kit";
// import {
//   u1F60D,
//   u1F62D,
//   u1F624,
//   u1F615,
// } from "react-icons-kit/noto_emoji_regular/";
// import {
//   happy,
//   happy2,
//   smile,
//   smile2,
//   sad,
//   sad2,
//   angry,
//   angry2,
//   shocked,
//   shocked2,
//   frustrated,
//   frustrated2,
//   crying,
//   crying2,
//   neutral,
//   neutral2,
//   confused,
//   confused2,
//   cool,
//   cool2,
//   baffled,
//   baffled2,
//   evil,
//   evil2,
//   wondering,
//   wondering2,
// } from "react-icons-kit/icomoon/";

// const emojis2 = [
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffd900" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffdd00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffb900" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffb900" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffb900" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#feba02" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffcc2f" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fdbd10" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffc907" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fcd000" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffcd00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fdbb30" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffc715" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#f5af02" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffdb00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fdca30" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#f9b949" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffcb00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fec600" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffbd0a" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffcc00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffdc80" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fecb2e" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffd300" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffc600" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffbb00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffd900" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffdd00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffb900" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffb900" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffb900" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#feba02" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffcc2f" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fdbd10" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffc907" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fcd000" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffcd00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fdbb30" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffc715" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#f5af02" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffdb00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fdca30" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#f9b949" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffcb00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fec600" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffbd0a" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffcc00" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffdc80" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#fecb2e" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffd300" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffc600" }} /> },
//   { emoji: <Icon icon={happy2} size={30} style={{ color: "#ffbb00" }} /> },

//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff4c4c" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#f85a40" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#fe5000" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#e4002b" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ed1c24" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ed1b2e" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff0b00" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff4e00" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#f50537" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#e04646" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#eb2226" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ec1c24" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ec2c22" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff4816" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff3c41" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff2d37" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#f23819" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#e32119" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff4025" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff4000" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff2b00" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff4a00" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#eb4962" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff4000" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#d7182a" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#e81123" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#e2203d" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#f82a53" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#fe230a" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ed1c24" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ee1c2e" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#fc4c02" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff3300" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#f80046" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff0033" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff1100" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ed1c27" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff4500" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff5454" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#fb0a2a" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ee3124" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ee3423" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#e60012" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#e50914" }} /> },
//   { emoji: <Icon icon={angry2} size={30} style={{ color: "#ee1d23" }} /> },

//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0099e5" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00a4e4" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#037ef3" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00aeff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0389ff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#136ad5" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#1aafd0" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#44c7f4" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00aeef" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00aee6" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#009fe3" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#2b80ff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00acee" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#168eea" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00aaff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#2e9df7" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0ebeff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00aaff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#2d72d9" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#005be2" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#2e9fff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#007ee5" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#1cb0f6" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0064d2" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#40b3ff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0d9ddb" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#4ba6f5" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00a0e9" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#1877f2" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0095dd" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0063dc" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#228ae6" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#009bff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0084ff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0078d7" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#004087" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0000e6" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0e5fd8" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#6585ed" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0099e5" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00a4e4" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#037ef3" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00aeff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0389ff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#136ad5" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#1aafd0" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#44c7f4" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00aeef" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00aee6" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#009fe3" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#2b80ff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00acee" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#168eea" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00aaff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#2e9df7" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0ebeff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00aaff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#2d72d9" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#005be2" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#2e9fff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#007ee5" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#1cb0f6" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0064d2" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#40b3ff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0d9ddb" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#4ba6f5" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#00a0e9" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#1877f2" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0095dd" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0063dc" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#228ae6" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#009bff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0084ff" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0078d7" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#004087" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0000e6" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#0e5fd8" }} /> },
//   { emoji: <Icon icon={u1F62D} size={40} style={{ color: "#6585ed" }} /> },

//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff4c4c" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#f85a40" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#fe5000" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#e4002b" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ed1c24" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ed1b2e" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff0b00" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff4e00" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#f50537" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#e04646" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#eb2226" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ec1c24" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ec2c22" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff4816" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff3c41" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff2d37" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#f23819" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#e32119" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff4025" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff4000" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff2b00" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff4a00" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#eb4962" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff4000" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#d7182a" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#e81123" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#e2203d" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#f82a53" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#fe230a" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ed1c24" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ee1c2e" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#fc4c02" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff3300" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#f80046" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff0033" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff1100" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ed1c27" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff4500" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff5454" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#fb0a2a" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ee3124" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ee3423" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ff0000" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#e60012" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#e50914" }} /> },
//   { emoji: <Icon icon={u1F615} size={40} style={{ color: "#ee1d23" }} /> },
//   // { emoji: <Icon icon={happy2} size={20} style={{ color: "#ffd900" }} /> },
//   // { emoji: <Icon icon={smile2} size={20} style={{ color: "#ffdd00" }} /> },
//   // { emoji: <Icon icon={sad2} size={20} style={{ color: "#ffb900" }} /> },
//   // { emoji: <Icon icon={angry2} size={20} style={{ color: "#ffb900" }} /> },
//   // { emoji: <Icon icon={shocked2} size={20} style={{ color: "#ffb900" }} /> },
//   // { emoji: <Icon icon={frustrated2} size={20} style={{ color: "#feba02" }} /> },
//   // { emoji: <Icon icon={crying2} size={20} style={{ color: "#ffcc2f" }} /> },
//   // { emoji: <Icon icon={neutral2} size={20} style={{ color: "#fdbd10" }} /> },
//   // { emoji: <Icon icon={confused2} size={20} style={{ color: "#ffc907" }} /> },
//   // { emoji: <Icon icon={cool2} size={20} style={{ color: "#fcd000" }} /> },
//   // { emoji: <Icon icon={baffled2} size={20} style={{ color: "#ffcd00" }} /> },
//   // { emoji: <Icon icon={evil2} size={20} style={{ color: "#fdbb30" }} /> },
//   // { emoji: <Icon icon={wondering2} size={20} style={{ color: "#ffc715" }} /> },
//   // { emoji: <Icon icon={happy2} size={20} style={{ color: "#f5af02" }} /> },
//   // { emoji: <Icon icon={smile2} size={20} style={{ color: "#ffdb00" }} /> },
//   // { emoji: <Icon icon={sad2} size={20} style={{ color: "#fdca30" }} /> },
//   // { emoji: <Icon icon={angry2} size={20} style={{ color: "#f9b949" }} /> },
//   // { emoji: <Icon icon={shocked2} size={20} style={{ color: "#ffcb00" }} /> },
//   // { emoji: <Icon icon={frustrated2} size={20} style={{ color: "#fec600" }} /> },
//   // { emoji: <Icon icon={crying2} size={20} style={{ color: "#ffbd0a" }} /> },
//   // { emoji: <Icon icon={neutral2} size={20} style={{ color: "#ffcc00" }} /> },
//   // { emoji: <Icon icon={confused2} size={20} style={{ color: "#ffdc80" }} /> },
//   // { emoji: <Icon icon={cool2} size={20} style={{ color: "#fecb2e" }} /> },
//   // { emoji: <Icon icon={baffled2} size={20} style={{ color: "#ffd200" }} /> },
//   // { emoji: <Icon icon={evil2} size={20} style={{ color: "#ffc600" }} /> },
//   // { emoji: <Icon icon={wondering2} size={20} style={{ color: "#ffbb00" }} /> },
//   // { emoji: <Icon icon={happy} size={20} style={{ color: "#f5af02" }} /> },
//   // { emoji: <Icon icon={smile} size={20} style={{ color: "#ffdb00" }} /> },
//   // { emoji: <Icon icon={sad} size={20} style={{ color: "#fdca30" }} /> },
//   // { emoji: <Icon icon={angry} size={20} style={{ color: "#f9b949" }} /> },
//   // { emoji: <Icon icon={shocked} size={20} style={{ color: "#ffcb00" }} /> },
//   // { emoji: <Icon icon={frustrated} size={20} style={{ color: "#fec600" }} /> },
//   // { emoji: <Icon icon={crying} size={20} style={{ color: "#ffbd0a" }} /> },
//   // { emoji: <Icon icon={neutral} size={20} style={{ color: "#ffcc00" }} /> },
//   // { emoji: <Icon icon={confused} size={20} style={{ color: "#ffdc80" }} /> },
//   // { emoji: <Icon icon={cool} size={20} style={{ color: "#fecb2e" }} /> },
//   // { emoji: <Icon icon={baffled} size={20} style={{ color: "#ffd200" }} /> },
//   // { emoji: <Icon icon={evil} size={20} style={{ color: "#ffc600" }} /> },
//   // { emoji: <Icon icon={wondering} size={20} style={{ color: "#ffbb00" }} /> },
// ];

// const emojis = [
//   { id: 1, emoji: "baffled" },
//   { id: 2, emoji: "smile" },
//   { id: 3, emoji: "cool" },
//   { id: 4, emoji: "neutral" },
//   { id: 5, emoji: "frustrated" },
//   { id: 6, emoji: "shocked2" },
//   { id: 7, emoji: "angry2" },
//   { id: 8, emoji: "sad2" },
//   { id: 9, emoji: "confused2" },
//   { id: 10, emoji: "happy" },
// ];

// const EmojisHeaders = styled.div`
//   border: none;
//   border-top-right-radius: 0.5rem;
//   border-top-left-radius: 0.5rem;
//   text-align: center;
//   background-color: #ffd4d4;
//   padding: 0.2rem;
//   margin-bottom: 0.3rem;
// `;

// const EmojisBody = styled.div`
//   display: flex;
//   flex-flow: row wrap;
// `;

// const EmojiUnit = styled.div`
//   font-size: 1.5rem;
//   text-align: center;
//   cursor: pointer;

//   &:hover {
//     background-color: #e6007e;
//     transform: scale(1.5);
//   }
//   &:active {
//     transform: scale(1);
//   }
// `;

// const EmojiButton = styled.button`
//   border: none;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
//     rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
//   background-color: white;
//   border-radius: 0.3rem;
//   cursor: pointer;
//   text-align: center;
//   margin: 0.2rem;

//   &:active {
//     transform: scale(0.95);
//   }
// `;

// const EmojiModal = () => {
//   const [emojiChosen, setEmojiChosen] = useState(null);
//   console.log("바깥 콘솔", emojiChosen);

//   return (
//     <>
//       <div
//         className="emoji-wrapper"
//         style={{
//           maxWidth: "50rem",
//           display: "flex",
//           flexDirection: "column",
//           // border: "1px solid black",
//           borderRadius: "0.5rem",
//           boxShadow:
//             "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
//         }}
//       >
//         <EmojisHeaders className="emojis-header">오늘의 기분</EmojisHeaders>
//         <EmojisBody className="emojis-body">
//           {emojis2.map((emoji, idx) => {
//             return (
//               <EmojiUnit
//                 key={idx}
//                 onClick={() => {
//                   setEmojiChosen(idx);
//                 }}
//                 style={{
//                   backgroundColor: idx === emojiChosen ? "#66c2ff" : "",
//                 }}
//               >
//                 {emoji.emoji}
//                 {/* <Icon icon={`${emoji.emoji}`} /> */}
//               </EmojiUnit>
//             );
//           })}
//         </EmojisBody>
//         <div style={{ display: "flex", justifyContent: "flex-end" }}>
//           <EmojiButton
//             onClick={() => {
//               console.log(emojiChosen);
//             }}
//           >
//             선택
//           </EmojiButton>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmojiModal;
