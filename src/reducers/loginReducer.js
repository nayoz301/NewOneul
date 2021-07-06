import { initialState } from "./initialState";

const loginReducer = (
  state = initialState,
  { type, accessToken, userInfo }
) => {
  switch (type) {
    case "LOG_IN":
      return { ...state, login: { isLogin: true, accessToken }, userInfo };

    case "LOG_OUT":
      return {
        ...state,
        login: { isLogin: false, accessToken: null },
        userInfo: {},
      };

    case "MODIFY_ACCESS_TOKEN":
      return { ...state, login: { ...state.login, accessToken } };

    default:
      return state;
  }
};

export default loginReducer;
