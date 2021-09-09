import React, { useRef, useEffect, useState } from "react";
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
import {
  arr_Colors,
  CanvasWrapper,
  Canvas,
  ControlBtns,
  RefreshBtn,
  LoadBtn,
  PaintBtn,
  FillBtn,
  EraserBtn,
  RangeBtnWrapper,
  RangeBtn,
  ColorWrapper,
  Colors,
} from "../../styles/painting/Painting.style";

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

      ctx.current.fillStyle = "white";
      ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  }, [isEditing]);

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
    //네이티브는 캔버스 내부 안에서의 좌표
    //캔버스.height, width 는 고정
    //캔버스.clientHeight 은 줄어든 영역의 크기
    const getMouesPosition = (nativeEvent) => {
      var mouseX = (nativeEvent.offsetX * canvas.width) / canvas.clientWidth;
      var mouseY = (nativeEvent.offsetY * canvas.height) / canvas.clientHeight;
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

export default React.memo(Painting);
