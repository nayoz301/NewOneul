import { Icon } from "react-icons-kit";
import {
  happy,
  smile,
  sad,
  cool,
  angry,
  shocked,
  baffled,
  neutral,
  frustrated,
  crying,
} from "react-icons-kit/icomoon/";
import {
  iosSunny,
  iosPartlysunny,
  iosRainy,
  iosSnowy,
  iosCloud,
} from "react-icons-kit/ionicons";

const makeFaceIcon = (iconName, color) => {
  return <Icon face icon={iconName} style={{ color: `#${color}` }} />;
};

const makeWeatherIcon = (iconName, color) => {
  return <Icon weather icon={iconName} style={{ color: `#${color}` }} />;
};

export const initialState = {
  login: {
    accessToken: "",
  },
  userInfo: {},
  publicDiary: [],
  myDiary: [],
  musicList: [],
  faceIcons: [
    { id: 1, icon: makeFaceIcon(happy) },
    { id: 2, icon: makeFaceIcon(smile) },
    { id: 3, icon: makeFaceIcon(sad) },
    { id: 4, icon: makeFaceIcon(cool) },
    { id: 5, icon: makeFaceIcon(angry) },
    { id: 6, icon: makeFaceIcon(shocked) },
    { id: 7, icon: makeFaceIcon(baffled) },
    { id: 8, icon: makeFaceIcon(neutral) },
    { id: 9, icon: makeFaceIcon(frustrated) },
    { id: 10, icon: makeFaceIcon(crying) },
  ],
  weatherIcons: [
    { id: 1, icon: makeWeatherIcon(iosSunny, "f6a102") },
    { id: 2, icon: makeWeatherIcon(iosPartlysunny, "aaa") },
    { id: 3, icon: makeWeatherIcon(iosCloud, "aaa") },
    { id: 4, icon: makeWeatherIcon(iosRainy, "86c9d9") },
    { id: 5, icon: makeWeatherIcon(iosSnowy, "5488c8") },
  ],
};
