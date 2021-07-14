import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../../actions";
import styled, { keyframes } from "styled-components";
import { flexCenter } from "../../styles/global.style";

const Loading = ({ login }) => {
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

  return (
    // <LoadingSection>
    <LoadingH>로딩 중 입니다.</LoadingH>
    // {/* <Battery></Battery> */}
    // </LoadingSection>
  );
};

export default connect(null, { login })(Loading);

const LoadingSection = styled.section`
  height: 100vh;
  ${flexCenter}
  flex-direction: column;
`;

const LoadingH = styled.h1`
  font-size: 4rem;
  font-family: var(--thick-font);
`;

// const charge = keyframes`
// 0% {
//   box-shadow: inset 0 0 0 #333
// }
// 100%{
//   box-shadow: inset 8rem 0 0 #333
// }
// `;

// const Battery = styled.div`
//   width: 8rem;
//   height: 3rem;
//   border: 1px #333 solid;
//   border-radius: 2px;
//   position: relative;
//   animation: ${charge} 3s linear infinite;
//   margin-top: 2rem;

//   &::after {
//     width: 0.4rem;
//     height: 1rem;
//     background-color: #333;
//     border-radius: 0 1px 1px 0;
//     position: absolute;
//     top: 0.46rem;
//     right: -0.4rem;
//   }
// `;

// typewriter h1 {
//   overflow: hidden; /* Ensures the content is not revealed until the animation */
//   border-right: .15em solid orange; /* The typwriter cursor */
//   white-space: nowrap; /* Keeps the content on a single line */
//   margin: 0 auto; /* Gives that scrolling effect as the typing happens */
//   letter-spacing: .15em; /* Adjust as needed */
//   animation:
//     typing 3.5s steps(40, end),
//     blink-caret .75s step-end infinite;
// }

// const typing = keyframes`
//   from { width: 0 }
//   to { width: 10% }
// `;

// /* The typewriter cursor effect */
// const blinkCaret = keyframes`
//   from, to { border-color: transparent }
//   50% { border-color: black; }
// `;

// const LoadingH = styled.div`
//   overflow: hidden;
//   border-right: 0.15rem solid black;
//   white-space: nowrap;
//   margin: 0 auto;
//   letter-spacing: 0.15rem;
//   animation: ${typing} 3.5s steps(10, end) infinite,
//     ${blinkCaret} 0.75s step-end infinite;
// `;
