import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../../actions";
import styled from "styled-components";

const Loading = ({ login, setLoading }) => {
  const history = useHistory();

  useEffect(async () => {
    const link = document.location.href;

    if (link.indexOf("?") !== -1) {
      const query = link.split("?")[1].split("&");
      // setLoading(true);

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
        .post(
          "https://oneul.site/O_NeulServer/oauth/login",
          {
            code: code,
            state: state,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data.data);
          login(res.data.data.accessToken, res.data.data.user);
          // setLoading(false);
          history.push("/main");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return <LoadingH>로딩 중 입니다.</LoadingH>;
};

export default connect(null, { login })(Loading);

const LoadingH = styled.h1`
  font-size: 5rem;
`;
