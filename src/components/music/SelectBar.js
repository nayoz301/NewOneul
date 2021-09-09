import React, { useState } from "react";
import uniqueId from "lodash/uniqueId";
import { Icon } from "react-icons-kit";
import { ic_arrow_drop_down, ic_arrow_drop_up } from "react-icons-kit/md/";
import {
  BodyWrapper,
  GenreWrapper,
  SelectedGenre,
  List,
  Genre,
} from "../../styles/music/SelectBar.style";
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

export default SelectBar;
