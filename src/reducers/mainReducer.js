import { initialState } from "./initialState";

const mainReducer = (
  state = initialState.diaryState,
  { type, publicDiary, myDiary, musicList }
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
    default:
      return state;
  }
};

export default mainReducer;
