import React from "react";
import Music from "../music/Music";
import styled from "styled-components";
import DiaryWriting from "./DiaryWriting";

const DiaryModal = (props) => {
  const { diaryOpen, diaryModalOnOff } = props;

  return (
    <div className={diaryOpen ? "openModal modal" : "modal"}>
      <section>
        <main>
          <DiaryWriting diaryModalOnOff={diaryModalOnOff} />
        </main>
      </section>
    </div>
  );
};
export default DiaryModal;
