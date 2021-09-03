import React, { Component } from "react";
import styled from "styled-components";
import Music from "../music/Music";

const MusicModal = (props) => {
  const {
    musicOpen,
    musicModalOnOff,
    getMusicData,
    selectedMusicId,
    isEditing,
    musicChosen,
    setMusicChosen,
  } = props;

  return (
    <MusicPlayerEffect musicOpen={musicOpen}>
      <Music
        musicModalOnOff={musicModalOnOff}
        getMusicData={getMusicData}
        selectedMusicId={selectedMusicId}
        isEditing={isEditing}
        musicChosen={musicChosen}
        setMusicChosen={setMusicChosen}
        musicOpen={musicOpen}
      />
    </MusicPlayerEffect>
  );
};
export default MusicModal;

const MusicPlayerEffect = styled.section`
  transform: ${(props) =>
    props.musicOpen ? "translateY(0)" : "translateY(-90%)"};
  opacity: ${(props) => (props.musicOpen ? 1 : 0)};
  display: flex;
  position: fixed;
  z-index: 200;
  transition: all 0.4s ease-in-out;
  top: -10%;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
