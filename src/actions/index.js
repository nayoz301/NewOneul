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

export const fetchAllDiary = () => {};
