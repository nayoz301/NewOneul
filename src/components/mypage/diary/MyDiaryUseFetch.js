import { useEffect } from "react";
import axios from "axios";

const MyDiaryUseFetch = (url, userInfo, fetchMypageDiary) => {
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
          return fetchMypageDiary(
            result.myDiary,
            result.musicList
          )
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
};

export default MyDiaryUseFetch;
