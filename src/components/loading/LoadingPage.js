import React from "react";
// import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <>
      <div className="Loading_wrapper">
        <div className="loader book">
          <figure className="page"></figure>
          <figure className="page"></figure>
          <figure className="page"></figure>
        </div>
        <h1 className="text">오늘하러 출발</h1>
      </div>
    </>
  );
};

export default LoadingPage;
