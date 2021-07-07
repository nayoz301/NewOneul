import React from "react";
import Music from "../music/Music";

const MusicModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { musicOpen, musicModalOnOff, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={musicOpen ? "openModal modal" : "modal"}>
      {musicOpen ? (
        <section>
          <main>
            <Music musicModalOnOff={musicModalOnOff} />
          </main>
        </section>
      ) : null}
    </div>
  );
};
export default MusicModal;
