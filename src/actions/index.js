export const login = (accessToken, userInfo) => {
  return {
    type: "LOG_IN",
    accessToken,
    userInfo,
  };
};

export const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

export const modifyAccessToken = (accessToken) => {
  return {
    type: "MODIFY_ACCESS_TOKEN",
    accessToken,
  };
};

export const fetchAllUnloginDiary = (publicDiary, musicList) => {
  return {
    type: "FETCH_ALL_UNLOGIN_DATA",
    publicDiary,
    musicList,
  };
};

export const fetchAllLoginDiary = (publicDiary, myDiary, musicList) => {
  return {
    type: "FETCH_ALL_UNLOGIN_DATA",
    publicDiary,
    myDiary,
    musicList,
  };
};
