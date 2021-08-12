import React, { useState } from "react";
import styled from "styled-components";
import uniqueId from "lodash/uniqueId";
import { Icon } from "react-icons-kit";
import { ic_arrow_drop_down, ic_arrow_drop_up } from "react-icons-kit/md/";
import "./SelectBar.css";

const SelectBar = ({ getGenre, genreList }) => {
  const [isVisibil, setIsVisibil] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isClick, setIsClick] = useState(false);

  const genreClicked = (genre) => {
    setSelectedGenre(genre);
    getGenre(genre);
  };

  return (
    <div>
      <BodyWrapper
        onClick={() => {
          setIsVisibil(!isVisibil);
          setIsClick(() => {
            if (isClick === false) return true;
            else return false;
          });
        }}
      >
        <GenreWrapper>
          <SelectedGenre selectedGenre={selectedGenre}>
            {selectedGenre === ""
              ? "오늘의 무드는?"
              : selectedGenre.length <= 20
              ? selectedGenre
              : `${selectedGenre.slice(0, 20)}...`}
            <Icon
              size={25}
              icon={isClick ? ic_arrow_drop_up : ic_arrow_drop_down}
            />
          </SelectedGenre>
        </GenreWrapper>
        {isVisibil && (
          <List>
            {genreList.map((genre) => (
              <Genre
                key={uniqueId()}
                onClick={() => genreClicked(genre)}
                selectedGenre={selectedGenre}
              >
                {genre}
              </Genre>
            ))}
          </List>
        )}
      </BodyWrapper>
    </div>
  );
};

const BodyWrapper = styled.div`
  width: 24rem;
  height: 4rem;
  padding: 0 1.6rem;
  border-radius: 6px;
  border: 0.1rem solid #dfd5c9;
  position: relative;
  cursor: pointer;
`;

const GenreWrapper = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: relative;
`;

const SelectedGenre = styled.span`
  font-size: 1.7rem;

  svg {
    position: absolute;
    left: 19rem;
    bottom: 0.9rem;
  }
`;

const List = styled.div`
  position: absolute;
  left: 0;
  width: 24rem;
  max-height: 16.7rem;
  overflow-y: scroll;
  padding: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  border: 1px solid #c7c1b6;
  z-index: 300;
  background-color: #f8f8fa;

  &::-webkit-scrollbar {
    /*스크롤바 두께*/
    width: 0.3rem;
  }

  &::-webkit-scrollbar-thumb {
    /*스크롤바 색*/
    background: #d2c4adf0;
    border-radius: 1rem;
  }
`;

const Genre = styled.li`
  height: 32px;
  font-size: 1.4rem;
  list-style: none;
  line-height: 3.6rem;
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 0.6rem;
  color: rgb(175, 161, 161);
  transition: 0.3s linear;

  &:hover {
    color: #000;
    background: rgba(10, 39, 206, 0.082);
  }
`;

export default SelectBar;
