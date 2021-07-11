import { initialState } from "./initialState";

const mainReducer = (
  state = initialState.diaryState,
  { type, publicDiary, myDiary, musicList, payload }
) => {
  switch (type) {
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
    case "ADD_NEW_PUBLIC_DIARY":
      return {
        ...state,
        publicDiary: [payload, ...publicDiary],
        myDiary: [...myDiary],
        musicList: [...musicList],
      };
    case "ADD_NEW_PRIVATE_DIARY":
      return {
        ...state,
        publicDiary: [...publicDiary],
        myDiary: [payload, ...myDiary],
        musicList: [...musicList],
      };
    default:
      return state;
  }
};

export default mainReducer;
