import styled from "styled-components";

export const EmojiWrapper = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  width: 22rem;
  height: 16.6 rem;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  animation: modal-show 0.3s;

  &:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -1rem;
    border-width: 1rem;
    border-style: solid;
    border-color: transparent transparent #827870 transparent;
  }

  & keyframes modal-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const EmojisHeaders = styled.div`
  color: #585b5c;
  background-color: #f2ede3;
  font-size: 1.7rem;
  border: none;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.2rem;
  margin-bottom: 0.3rem;
`;

export const EmojisBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.5rem;
`;

export const EmojiUnit = styled.div`
  text-align: center;
  width: 20%;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  font-size: 2.5rem;
  color: ${(props) => props.color};
`;
