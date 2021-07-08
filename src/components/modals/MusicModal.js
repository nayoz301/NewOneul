import React from "react";
import Music from "../music/Music";
import styled from "styled-components";
import { music } from "react-icons-kit/icomoon";

const MusicModal = (props) => {
  const { musicOpen, musicModalOnOff } = props;

  return (
    <section
      className="mainNav"
      style={musicOpen ? { transform: "translateX(0)" } : null}
    >
      <Music musicModalOnOff={musicModalOnOff} />
      {/* <div
        onClick={musicModalOnOff}
        className={`overlay ${musicOpen ? "open" : ""}`}
      /> */}
    </section>
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
