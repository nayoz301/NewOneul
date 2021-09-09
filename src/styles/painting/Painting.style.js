import styled from "styled-components";

export const arr_Colors = [
  "#e32119",
  "#ff3b30",
  "#f65314",
  "#ff9900",
  "#fbb034",
  "#fdbd10",
  "#ffcc00",
  "#ffdd00",
  "#d2ea32",
  "#8ee000",
  "#6cc644",
  "#2dbe60",
  "#00b22d",
  "#5ec6f2",
  "#00a4e4",
  "#4285f4",
  "#147efb",
  "#0064d2",
  "#5856d6",
  "#833ab4",
  "#8a7967",
  "#7f7f7f",
  "white",
  "#2c2c2c",
];

export const CanvasWrapper = styled.section`
  position: relative;
`;

export const Canvas = styled.canvas`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: white;
  box-shadow: 0 0.4rem 0.6rem rgba(50, 50, 93, 0.11),
    0 1px 3px rgba(0, 0, 0, 0.08);
`;

export const ControlBtns = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f7f8e7;
`;

export const Button = styled.button`
  flex: 1 1 auto;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0rem;
  margin: 0.05rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(27, 27, 27, 0.2);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  svg {
    font-size: 2rem;
    color: #7b716e;
    pointer-events: none;
    &:active {
      transform: scale(0.95);
    }
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const RefreshBtn = styled(Button)`
  background-color: #d4c7b1;
`;

export const LoadBtn = styled(Button)`
  background-color: #d4c7b1;
`;

export const PaintBtn = styled(Button)`
  background-color: ${(props) =>
    props.title === props.buttonClicked ? "#7b716e" : "#f2ede3"};

  svg {
    color: ${(props) =>
      props.title === props.buttonClicked ? "#d4c7b1" : "#555"};
  }
`;

export const FillBtn = styled(PaintBtn)``;

export const EraserBtn = styled(PaintBtn)``;

export const RangeBtnWrapper = styled.span`
  flex: 0.5 1 auto;
  display: flex;
  justify-content: center;
  background-color: #f2ede3;
  padding: 1.45rem 0;
  border-radius: 0.5rem;
  border: 1px solid rgb(27, 27, 27, 0.2);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const RangeBtn = styled.input`
  align-items: center;
  -webkit-appearance: none;
  width: 7rem;
  height: 0.2rem;
  border-radius: 0.5rem;
  background: #7b716e;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background: #7b716e;
    cursor: pointer;
  }
`;

export const ColorWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Colors = styled.span`
  flex: 1 1 auto;
  height: 2rem;
  cursor: pointer; /*이거하면 커서 댔을 때 손가락 모양으로 바뀜*/
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:active {
    transform: scale(0.95);
  }
`;
