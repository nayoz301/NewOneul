import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <>
      <div className="Loading_wrapper">
        <div className="loader book">
          <figure className="page"></figure>
          <figure className="page"></figure>
          <figure className="page"></figure>
        </div>
        <h1>오늘을 담는 중</h1>
      </div>
    </>
  );
};

export default Loading;
