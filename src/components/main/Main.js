import React from "react";
import "../../style.css";
import Calendar from "./Calendar";

const Main = () => {
  return (
    <Calendar />
    // <section style={{ minHeight: "100vh", background: "var(--primary-color)" }}>
    //   <header
    //     style={{
    //       border: "1px solid blue",
    //       position: "fixed",
    //       top: 0,
    //       right: 0,
    //       left: 0,
    //       height: "6vh",
    //       background: "white",
    //       zIndex: "200",
    //     }}
    //   >
    //     <h1>오늘 ,</h1>
    //     <button onClick={() => console.log("안녕")}>마이페이지</button>
    //   </header>
    //   <section className="main-section">
    //     <div
    //       className="wrapper"
    //       style={{
    //         border: "1px solid orange",
    //         margin: "0 auto",
    //         padding: "2px",
    //       }}
    //     >
    //       <div
    //         className="calendar-mycard"
    //         style={{ border: "2px solid #6495ED" }}
    //       >
    //         <div
    //           className="calendar"
    //           style={{
    //             border: "1px solid purple",
    //             height: "40rem",
    //             fontSize: "3rem",
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //           }}
    //         >
    //           calendar
    //         </div>
    //         <div
    //           className="mycard"
    //           style={{ border: "1px solid green", height: "17rem" }}
    //         >
    //           <h1 style={{ textAlign: "center" }}>나의 일기</h1>
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           minHeight: "40rem",
    //           border: "1px solid black",
    //         }}
    //       >
    //         <div className="card-wrapper" style={{ border: "1px solid blue" }}>
    //           <h1 style={{ textAlign: "center" }}>남의 일기</h1>
    //           <div
    //             style={{
    //               display: "flex",
    //               flexWrap: "wrap",
    //               justifyContent: "center",
    //             }}
    //           >
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: "1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //             <div
    //               className="card"
    //               style={{
    //                 width: "15rem",
    //                 height: "18rem",
    //                 background: "tomato",
    //                 fontSize: "1.6rem",
    //                 border: " 1px solid yellow",
    //                 // margin: ".9rem",
    //               }}
    //             >
    //               김덕기님
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </section>
  );
};

export default Main;
