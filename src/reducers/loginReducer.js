import { initialState } from "./initialState";

const loginReducer = (
  state = initialState,
  { type, accessToken, userInfo, publicDiary, myDiary, musicList }
) => {
  switch (type) {
    case "LOG_IN":
      return { ...state, login: { accessToken }, userInfo };

    case "LOG_OUT":
      return {
        ...state,
        login: { accessToken: "" },
        userInfo: {},
      };

    case "MODIFY_ACCESS_TOKEN":
      return { ...state, login: { accessToken } };

    case "FETCH_ALL_UNLOGIN_DATA":
      return {
        ...state,
        publicDiary: [...publicDiary],
        musicList: [...musicList],
      };

    case "FETCH_ALL_LOGIN_DATA":
      return {
        ...state,
        publicDiary: [...publicDiary],
        myDiary: [...myDiary],
        musicList: [...musicList],
      };
    default:
      return state;
  }
};

export default loginReducer;
