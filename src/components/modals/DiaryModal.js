import React from "react";
import DiaryWriting from "./DiaryWriting";

const DiaryModal = ({ diaryOpen, diaryModalOnOff }) => {
  return (
    <div>
      <section>
        <main>
          <DiaryWriting diaryModalOnOff={diaryModalOnOff} />
        </main>
      </section>
    </div>
  );
};
export default DiaryModal;
