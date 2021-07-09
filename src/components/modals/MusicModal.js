import React from "react";
import Music from "../music/Music";
import styled from "styled-components";
import { music } from "react-icons-kit/icomoon";

const MusicModal = (props) => {
  const { musicOpen, musicModalOnOff } = props;

  return (
    <>
      <section
        className="mainNav"
        style={musicOpen ? { transform: "translateY(0)", opacity: 1 } : null}
      >
        {/* <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,.6)",
          }}
        ></div> */}
        <Music musicModalOnOff={musicModalOnOff} />
        {/* <div
        onClick={musicModalOnOff}
        className={`overlay ${musicOpen ? "open" : ""}`}
      /> */}
      </section>
    </>
  );
};
export default MusicModal;

// import React from "react";
// import Music from "../music/Music";
// import styled from "styled-components";

// const MusicModal = (props) => {
//   const { musicOpen, musicModalOnOff } = props;

//   return (
//     <div className={musicOpen ? "openModal modal" : "modal"}>
//       <section>
//         <main>
//           <Music musicModalOnOff={musicModalOnOff} />
//         </main>
//       </section>
//     </div>
//   );
// };
// export default MusicModal;
