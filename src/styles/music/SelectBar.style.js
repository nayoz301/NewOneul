import styled from "styled-components";

export const BodyWrapper = styled.div`
  width: 24rem;
  height: 4rem;
  padding: 0 1.6rem;
  border-radius: 6px;
  border: 0.1rem solid #dfd5c9;
  position: relative;
  cursor: pointer;
`;

export const GenreWrapper = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: relative;
`;

export const SelectedGenre = styled.span`
  font-size: 1.7rem;

  svg {
    position: absolute;
    left: 19rem;
    bottom: 0.9rem;
  }
`;

export const List = styled.div`
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

export const Genre = styled.li`
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

/*
Pink CSS
.select {
  margin-top: 0.4rem;
  width: 24rem;
  height: 4rem;
  padding: 0 1.6rem;
  border-radius: 6px;
  border: 0.1rem solid #80594a;
  position: relative;
  cursor: pointer;
}

.selected-option {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.selected-option span {
  font-size: 1.5rem;
}

.options {
  position: absolute;
  left: 0;
  width: 24rem;
  max-height: 16.7rem;
  overflow-y: scroll;
  padding: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  border: 1px solid rgb(235, 203, 203);
  z-index: 300;
  background-color: #f8f8fa;
}

.options::-webkit-scrollbar {
  width: 0.3rem;
}

.options::-webkit-scrollbar-thumb {
  background: rgb(235, 203, 203);
  border-radius: 1rem;
}

.options li {
  height: 32px;
  font-size: 1.4rem;
  list-style: none;
  line-height: 3.6rem;
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 0.6rem;
  color: rgb(175, 161, 161);
  transition: 0.3s linear;
}
.options li:hover {
  color: #000;
  background: rgba(10, 39, 206, 0.082);
}
.options li:hover .active-option {
  color: #000;
  background: rgba(10, 39, 206, 0.082);
}

input ::placeholder {
  color: rgb(175, 161, 161);
}
*/
