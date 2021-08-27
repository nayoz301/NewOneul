import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import uniqueId from "lodash/uniqueId";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faFillDrip,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faImage as farImage,
  faStickyNote as farStickyNote,
} from "@fortawesome/free-regular-svg-icons";
let arr_Colors = [
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

const Painting = ({
  canvasRef,
  selectedImage,
  isEditing,
  paintingChangeCheck,
}) => {
  const [filling, setFilling] = useState(false);
  const [painting, setPainting] = useState(false);
  const [eraser, setEraser] = useState(false);
  const [erasing, setErasing] = useState(false);
  const [lineWeight, setLineWeight] = useState(2.5);

  const [buttonClicked, setButtonClicked] = useState("PaintBtn");

  const buttonClickHandler = (e) => {
    setButtonClicked(e.target.title);
  };

  const ctx = useRef();
  const fileRef = useRef();

  const BASE_COLOR = "2c2c2c";
  const CANVAS_WIDTH = 1000;
  const CANVAS_HEIGHT = 500;

  useEffect(() => {
    if (selectedImage !== "") {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = selectedImage;
      img.crossOrigin = "*";

      img.onload = function () {
        ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      };
    }
  }, [isEditing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas !== null) {
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      ctx.current = canvas.getContext("2d");
      ctx.current.strokeStyle = BASE_COLOR;

      ctx.current.fillStyle = "white"; //캔버스 기본 바탕색깔 흰색으로 세팅. PNG는 투명이 되지만 JPEG는 기본이 투명 안되고 검은색.
      ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //캔버스 기본 바탕색깔 흰색으로 세팅.
    }
  }, [isEditing === false]);

  function handleInsertImage(e) {
    e.preventDefault();
    if (isEditing) {
      paintingChangeCheck();
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    var reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  const startPainting = () => {
    if (isEditing) {
      paintingChangeCheck();
    }
    if (eraser === true) {
      setPainting(false);
      setErasing(true);
      setFilling(false);
    } else {
      setPainting(true);
      setErasing(false);
    }
  };

  const stopPainting = () => {
    setPainting(false);
    setErasing(false);
  };

  const handlePaintClick = (e) => {
    ctx.current.lineWidth = lineWeight;
    setFilling(false);
    setEraser(false);
    setErasing(false);
  };

  const handleClearClick = () => {
    // ctx.current.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //이거하면 다 사라지고 투명해지지만 실제 데이터 받으면 검게 나오므로 맞지만 사용X
    ctx.current.fillStyle = "white"; // 일단 화이트로 바꾼다.
    ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //캔버스 배경 전체를 흰색으로 지워준다.
    ctx.current.fillStyle = ctx.current.strokeStyle; //원래 연필 색상으로 다시 돌려놓는다.
  };

  function handleFillClick() {
    setFilling(true);
    setPainting(false);
    setEraser(false);
    setErasing(false);
  }

  const onMouseMove = ({ nativeEvent }) => {
    const getMouesPosition = (nativeEvent) => {
      var mouseX =
        ((nativeEvent.offsetX * canvas.width) / canvas.clientWidth) | 0;
      var mouseY =
        ((nativeEvent.offsetY * canvas.height) / canvas.clientHeight) | 0;
      return { x: mouseX, y: mouseY };
    };
    const canvas = canvasRef.current;
    const coordX = getMouesPosition(nativeEvent).x;
    const coordY = getMouesPosition(nativeEvent).y;

    if (ctx.current && !painting && !erasing) {
      ctx.current.beginPath();
    } else if (painting) {
      ctx.current.globalCompositeOperation = "source-over";
      ctx.current.lineTo(coordX, coordY);
      ctx.current.lineCap = "round";
      ctx.current.stroke();
    } else if (erasing) {
      // ctx.current.globalCompositeOperation = "destination-out"; //이게 정석 지우개지만 이걸로 하면 검정화면 나타남
      ctx.current.globalCompositeOperation = "source-over";
      const colorExtra = ctx.current.strokeStyle; //일단 지금 선택된 색깔 킵하고
      ctx.current.strokeStyle = "white"; // 지우개에 흰색 입혀서 지우고 마지막에 다시 선택된 색 넣어준다
      ctx.current.fillStyle = "white"; // 이거 안해주면 마우스 포인터가 색깔그대로

      ctx.current.lineWidth = 15;
      ctx.current.beginPath();
      ctx.current.arc(coordX, coordY, 10, 0, 4 * Math.PI);
      ctx.current.fill();
      ctx.current.moveTo(coordX, coordY);
      ctx.current.lineTo(coordX, coordY);
      ctx.current.stroke();

      ctx.current.strokeStyle = colorExtra; //여기서 다시 아까 쓰던 색 넣어줌
      ctx.current.fillStyle = colorExtra;
    }
  };
  const handleEraserClick = () => {
    setEraser(true);
  };

  const handleColorClick = (e) => {
    const color = e.target.style.backgroundColor;
    ctx.current.strokeStyle = color;
    ctx.current.fillStyle = color;
  };

  const handleRangeChange = (e) => {
    setLineWeight(e.target.value);
    ctx.current.lineWidth = lineWeight;
  };

  const handleCanvasClick = () => {
    if (filling) {
      // ctx.current.fillStyle = "black";
      ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //사이즈 수정 필요
    }
  };

  const disableRightClick = (e) => {
    e.preventDefault(); //우클릭 방지 ㅋㅋ
  };

  const handleFileButtonClick = (e) => {
    //파일업로드 버튼
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  };

  if (selectedImage !== undefined && isEditing === false) {
    return (
      <section style={{ position: "relative" }}>
        <Canvas
          ref={canvasRef}
          onContextMenu={disableRightClick}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
        ></Canvas>
      </section>
    );
  } else if (selectedImage !== undefined && isEditing === true) {
    return (
      <div>
        <section>
          <ControlBtns>
            <RefreshBtn onClick={handleClearClick}>
              <FontAwesomeIcon icon={farStickyNote} />
            </RefreshBtn>

            <PaintBtn
              onClick={(e) => {
                handlePaintClick();
                buttonClickHandler(e);
              }}
              buttonClicked={buttonClicked}
              title={"PaintBtn"}
            >
              <FontAwesomeIcon icon={faPaintBrush} />
            </PaintBtn>

            <FillBtn
              onClick={(e) => {
                handleFillClick();
                buttonClickHandler(e);
              }}
              buttonClicked={buttonClicked}
              title={"FillBtn"}
            >
              <FontAwesomeIcon icon={faFillDrip} />
            </FillBtn>

            <EraserBtn
              onClick={(e) => {
                handleEraserClick();
                buttonClickHandler(e);
              }}
              buttonClicked={buttonClicked}
              title={"EraserBtn"}
            >
              <FontAwesomeIcon icon={faEraser} />
            </EraserBtn>

            <LoadBtn onClick={handleFileButtonClick}>
              <FontAwesomeIcon icon={farImage} />
            </LoadBtn>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden={true}
              onChange={handleInsertImage}
            />
            <RangeBtnWrapper>
              <RangeBtn
                type="range"
                min="0.1"
                max="15"
                defaultValue={"3"}
                step="0.1"
                onChange={handleRangeChange}
              />
            </RangeBtnWrapper>
          </ControlBtns>
        </section>
        <ColorWrapper>
          {arr_Colors.map((color) => (
            <Colors
              key={uniqueId()}
              style={{ backgroundColor: `${color}` }}
              onClick={handleColorClick}
            />
          ))}
        </ColorWrapper>

        <CanvasWrapper>
          <Canvas
            ref={canvasRef}
            onContextMenu={disableRightClick}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
            onClick={handleCanvasClick}
            onContextMenu={disableRightClick}
          ></Canvas>
        </CanvasWrapper>
      </div>
    );
  } else {
    return (
      <div>
        <section>
          <ControlBtns>
            <RefreshBtn onClick={handleClearClick}>
              <FontAwesomeIcon icon={farStickyNote} />
            </RefreshBtn>

            <PaintBtn
              onClick={(e) => {
                handlePaintClick();
                buttonClickHandler(e);
              }}
              buttonClicked={buttonClicked}
              title={"PaintBtn"}
            >
              <FontAwesomeIcon icon={faPaintBrush} />
            </PaintBtn>

            <FillBtn
              onClick={(e) => {
                handleFillClick();
                buttonClickHandler(e);
              }}
              buttonClicked={buttonClicked}
              title={"FillBtn"}
            >
              <FontAwesomeIcon icon={faFillDrip} />
            </FillBtn>

            <EraserBtn
              onClick={(e) => {
                handleEraserClick();
                buttonClickHandler(e);
              }}
              buttonClicked={buttonClicked}
              title={"EraserBtn"}
            >
              <FontAwesomeIcon icon={faEraser} />
            </EraserBtn>

            <LoadBtn onClick={handleFileButtonClick}>
              <FontAwesomeIcon icon={farImage} />
            </LoadBtn>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden={true}
              onChange={handleInsertImage}
            />
            <RangeBtnWrapper>
              <RangeBtn
                type="range"
                min="0.1"
                max="15"
                defaultValue={"3"}
                step="0.1"
                onChange={handleRangeChange}
              />
            </RangeBtnWrapper>
          </ControlBtns>
        </section>
        <ColorWrapper>
          {arr_Colors.map((color) => (
            <Colors
              key={uniqueId()}
              style={{ backgroundColor: `${color}` }}
              onClick={handleColorClick}
            />
          ))}
        </ColorWrapper>

        <CanvasWrapper>
          <Canvas
            ref={canvasRef}
            onContextMenu={disableRightClick}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
            onClick={handleCanvasClick}
            onContextMenu={disableRightClick}
          ></Canvas>
        </CanvasWrapper>
      </div>
    );
  }
};

const CanvasWrapper = styled.section`
  position: relative;
`;

const Canvas = styled.canvas`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: white;
  box-shadow: 0 0.4rem 0.6rem rgba(50, 50, 93, 0.11),
    0 1px 3px rgba(0, 0, 0, 0.08);
`;

const ControlBtns = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f7f8e7;
`;

const Button = styled.button`
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

const RefreshBtn = styled(Button)`
  background-color: #d4c7b1;
`;

const LoadBtn = styled(Button)`
  background-color: #d4c7b1;
`;

const PaintBtn = styled(Button)`
  background-color: ${(props) =>
    props.title === props.buttonClicked ? "#7b716e" : "#f2ede3"};

  svg {
    color: ${(props) =>
      props.title === props.buttonClicked ? "#d4c7b1" : "#555"};
  }
`;

const FillBtn = styled(PaintBtn)``;

const EraserBtn = styled(PaintBtn)``;

const RangeBtnWrapper = styled.span`
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

const RangeBtn = styled.input`
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

const ColorWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Colors = styled.span`
  flex: 1 1 auto;
  height: 2rem;
  cursor: pointer; /*이거하면 커서 댔을 때 손가락 모양으로 바뀜*/
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:active {
    transform: scale(0.95);
  }
`;

export default React.memo(Painting);
