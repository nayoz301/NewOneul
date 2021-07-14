import { useEffect } from "react";
import axios from "axios";

const useFetch = (url, userInfo, fetchAllLoginDiary, fetchAllUnloginDiary) => {
  useEffect(() => {
    return axios(
      url,
      {
        headers: {
          authorization: "Bearer " + userInfo.login.accessToken,
        },
      },
      {
        withCredentials: true,
      }
    )
      .then((data) => {
        return data.data.data;
      })
      .then((result) => {
        if (userInfo.login.accessToken) {
          return fetchAllLoginDiary(
            result.publicDiary,
            result.myDiary,
            result.musicList
          );
        } else {
          return fetchAllUnloginDiary(result.publicDiary, result.musicList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
};

export default useFetch;
