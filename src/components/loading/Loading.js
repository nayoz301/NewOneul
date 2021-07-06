import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Loading = () => {
  const history = useHistory();

  useEffect(async () => {
    const link = document.location.href;

    if (link.indexOf("?") !== -1) {
      const query = link.split("?")[1].split("&");

      let state, code;
      if (query[0].slice(0, 5) === "state") {
        state = query[0].slice(6);
        code = query[1].slice(5);
      } else {
        code = query[0].slice(5);
        state = query[1].slice(6);
      }

      console.log(code, state);
      axios
        .post("https://oneul.site/O_NeulServer/oauth/login", {
          code: code,
          state: state,
        })
        .then(() => {
          history.push("/main");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return <div>로딩 중 입니다.</div>;
};

export default Loading;
