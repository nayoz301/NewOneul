import React, { useRef, useEffect, useState } from "react";
import "./Painting.css";
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

  const [buttonClicked, setButtonClicked] = useState("paint_btn");

  const buttonClickHandler = (e) => {
    setButtonClicked(e.target.id);
  };

  const ctx = useRef();
  const fileRef = useRef();

  const BASE_COLOR = "2c2c2c";
  const CANVAS_WIDTH = 1000;
  const CANVAS_HEIGHT = 500;

  const [paintModified, setPaintModified] = useState(false);
  const modifiedStatus = () => {
    setPaintModified(!paintModified);
  };

  // const CANVAS_WIDTH = window.innerWidth / 2;
  // const CANVAS_HEIGHT = window.innerWidth / 4;

  // console.log("가로/세로:", window.innerWidth / 2, window.innerWidth / 4);

  //세이브파일 구현 완료

  // const handlePost = async () => { //이건 그냥 업로드할 때 쓰는 함수
  //   if (selectedFile) {
  //     const img = new FormData();
  //     img.append("file", selectedFile);

  //     await axios
  //       .post("http://localhost:4000/upload", img, {
  //         header: {
  //           "content-type": "multipart/form-data",
  //           credentials: true,
  //         },
  //       })
  //       .then((res) => {
  //         alert("파일이 성공적으로 저장되었습니다. 글을 작성해주세요");
  //       })
  //       .catch((err) => {
  //         alert("파일이 저장되지 않았습니다. 다시 시도해주세요");
  //       });
  //   } else {
  //     alert("파일을 업로드해주세요");
  //   }
  // };

  // function handleFileUpload() { // 이거는 로컬에 업로드하는 경우.
  //   console.log(canvasRef.current);
  //   canvasRef.current.toBlob(
  //     function (blob) {
  //       const img = new FormData();
  //       img.append("file", blob, `${Date.now()}.jpeg`);
  //       console.log(blob);
  //       axios
  //         .post("http://localhost:4000/upload", img, {
  //           header: {
  //             "content-type": "multipart/form-data",
  //             credentials: true,
  //           },
  //         })
  //         .then((res) => {
  //           alert("파일이 성공적으로 저장되었습니다. 글을 작성해주세요");
  //         })
  //         .catch((err) => {
  //           alert("파일이 저장되지 않았습니다. 다시 시도해주세요");
  //         });
  //     },
  //     "image/jpeg",
  //     0.8 //내릴수록 화질 안좋고 용량 줄어듦
  //   );
  // }
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
  }, [isEditing === false]);

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

  // const updateCanvas = async (e) => { //이거랑 handleInsertImage 차이 알아보기 이건 한번에 삽입이 안되고 그건 한번에 가능
  //   setSelectedFile(e.target.files[0]);
  //   e.preventDefault();
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   console.log(reader);
  //   reader.onloadend = () => {
  //     setPreviewURL(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  //   const ctx = canvasRef.current.getContext("2d");
  //   const img = new Image();
  //   img.crossOrigin = "Anonymus";
  //   img.src = previewURL;
  //   img.onload = () => {
  //     ctx.drawImage(img, 0, 0, 700, 400);
  //   };
  // };

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
  //세이프파일 구현 완료
  //이미지 혹은 그림판 선택 버튼

  const [previewURL, setPreviewURL] = useState(null);
  const [whichOne, setWhichOne] = useState("canvas");
  const whichOneFunc = (e) => {
    //useState에 의해서 버튼 innerText 변환 함수
    console.log(e.target.innerText);
    if (whichOne === "canvas") {
      setWhichOne("picture");
    } else {
      setWhichOne("canvas");
    }
  };

  // const handleImgPreview = (e) => {
  //   setSelectedFile(e.target.files[0]);
  //   e.preventDefault();
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   console.log(reader);
  //   reader.onloadend = () => {
  //     setPreviewURL(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // let $preview = null;
  // if (previewURL) {
  //   $preview = <img src={previewURL} />;
  // } else {
  //   $preview = (
  //     <div className="previewText">Please select an Image for Preview</div>
  //   );
  // }

  // let profile_preview = null;
  // if (selectedFile !== "") {
  //   profile_preview = <img className="profile_preview" src={previewURL}></img>;

  // }
  //이미지 혹은 그림판 선택 버튼

  //내꺼
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

  // function getMouesPosition(e) {
  //   var mouseX = ((e.offsetX * canvas.width) / canvas.clientWidth) | 0;
  //   var mouseY = ((e.offsetY * canvas.height) / canvas.clientHeight) | 0;
  //   return { x: mouseX, y: mouseY };
  // }

  const onMouseMove = ({ nativeEvent }) => {
    const getMouesPosition = (nativeEvent) => {
      var mouseX =
        ((nativeEvent.offsetX * canvas.width) / canvas.clientWidth) | 0;
      var mouseY =
        ((nativeEvent.offsetY * canvas.height) / canvas.clientHeight) | 0;
      return { x: mouseX, y: mouseY };
    };
    const canvas = canvasRef.current;
    const canvasBounds = canvasRef.current.getBoundingClientRect();
    // const x = getMouesPosition(nativeEvent).x;
    // const y = getMouesPosition(nativeEvent).y;

    // const x = nativeEvent.offsetX;
    // const y = nativeEvent.offsetY;

    // let x = nativeEvent.clientX - canvasBounds.left;
    // let y = nativeEvent.clientY - canvasBounds.top;
    // let x = nativeEvent.clientX - canvas.offsetLeft;
    // let y = (nativeEvent.clientY - canvas.offsetTop)height;
    // const x = (nativeEvent.offsetX / canvas.clientWidth) * 2 - 1;
    // const y = (1 - nativeEvent.offsetY / canvas.clientHeight) * 2 - 1;
    // let x = nativeEvent.clientX - canvas.offsetLeft;
    // let y = (nativeEvent.clientY - canvas.offsetTop)height;

    // var sx = canvas.width / window.innerWidth;
    // var sy = canvas.height / window.innerHeight;

    // let x = (nativeEvent.clientX - canvasBounds.left) / sx;
    // let y = (nativeEvent.clientY - canvasBounds.top) / sy;

    // var mouseX = nativeEvent.clientX - ctx.canvas.offsetLeft;
    // var mouseY = nativeEvent.clientY - ctx.canvas.offsetTop;

    // console.log(
    //   "무브마우스",
    //   getMouesPosition(nativeEvent),
    //   window.innerWidth,
    //   canvas.offsetLeft,
    //   canvas.clientHeight,
    //   window.innerWidth,
    //   canvas.width,
    //   nativeEvent.offsetX,
    //   nativeEvent.clientX,
    //   canvasBounds,
    //   canvasBounds.left,
    //   canvas.offsetBottom //캔버스안에서 탑 레프트 무조건 0
    // );

    if (ctx.current && !painting && !erasing) {
      ctx.current.beginPath();
      // console.log("CTX", ctx.current.beginPath());
      // ctx.current.moveTo(x, y);
    } else if (painting) {
      ctx.current.globalCompositeOperation = "source-over";
      ctx.current.lineTo(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y
      );
      ctx.current.lineCap = "round";
      ctx.current.stroke();

      // console.log("x,y", nativeEvent.offsetX, nativeEvent.offsetY);
    } else if (erasing) {
      // ctx.current.globalCompositeOperation = "destination-out"; //이게 정석 지우개지만 이걸로 하면 검정화면 나타남
      ctx.current.globalCompositeOperation = "source-over";
      const colorExtra = ctx.current.strokeStyle; //일단 지금 선택된 색깔 킵하고
      ctx.current.strokeStyle = "white"; // 지우개에 흰색 입혀서 지우고 마지막에 다시 선택된 색 넣어준다
      ctx.current.fillStyle = "white"; // 이거 안해주면 마우스 포인터가 색깔그대로

      ctx.current.lineWidth = 15;
      ctx.current.beginPath();
      ctx.current.arc(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y,
        10,
        0,
        4 * Math.PI
      );
      ctx.current.fill();
      ctx.current.moveTo(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y
      );
      ctx.current.lineTo(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y
      );
      ctx.current.stroke();

      ctx.current.strokeStyle = colorExtra; //여기서 다시 아까 쓰던 색 넣어줌
      ctx.current.fillStyle = colorExtra;
    }
  };
  const handleEraserClick = () => {
    setEraser(true);
  };

  const handleColorClick = (e) => {
    console.log("버튼 컬러클릭");
    const color = e.target.style.backgroundColor;
    ctx.current.strokeStyle = color;
    ctx.current.fillStyle = color;
  };

  const handleRangeChange = (e) => {
    setLineWeight(e.target.value);
    console.log("선 굵기:::", lineWeight);
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

  // useEffect(() => {
  //   console.log("유즈이펙트 실행 되나요?")
  //   const canvas = canvasRef.current;
  //   if (canvas !== null) {
  //     canvas.style.width = "100%";
  //     canvas.style.height = "100%";

  //     ctx.current = canvas.getContext("2d");
  //     ctx.current.strokeStyle = BASE_COLOR;

  //     ctx.current.fillStyle = "white"; //캔버스 기본 바탕색깔 흰색으로 세팅. PNG는 투명이 되지만 JPEG는 기본이 투명 안되고 검은색.
  //     ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //캔버스 기본 바탕색깔 흰색으로 세팅.
  //   }
  // }, []);

  if (selectedImage !== undefined && isEditing === false) {
    return (
      <div id="canvas_wrapper">
        <section id="controls">
          <span className="control_btns">
            {/* <button
              type="button"
              className="input_file_button"
              onClick={handleFileUpload}
            >
              upload
            </button> */}
          </span>
        </section>

        <section style={{ position: "relative" }}>
          <canvas
            id="canvas"
            ref={canvasRef}
            width={`${CANVAS_WIDTH}`}
            height={`${CANVAS_HEIGHT}`}
            onContextMenu={disableRightClick}
          ></canvas>
        </section>
      </div>
    );
  } else if (selectedImage !== undefined && isEditing === true) {
    return (
      <div id="canvas_wrapper">
        <section id="controls">
          <span className="control_btns">
            <button id="clearBtn" onClick={handleClearClick}>
              <FontAwesomeIcon
                icon={farStickyNote}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: "#7b716e",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="paint_btn"
              onClick={(e) => {
                handlePaintClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "paint_btn" ? "#7b716e" : "#f2ede3", //자기 엘리먼트에 id를 불러오는 방법없나?
              }}
            >
              <FontAwesomeIcon
                icon={faPaintBrush}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "paint_btn" ? "#d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="fill_btn"
              onClick={(e) => {
                handleFillClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "fill_btn" ? "#7b716e" : "#f2ede3",
              }}
            >
              <FontAwesomeIcon
                icon={faFillDrip}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "fill_btn" ? "#d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="eraser_btn"
              onClick={(e) => {
                handleEraserClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "eraser_btn" ? "#7b716e" : "#f2ede3",
              }}
            >
              <FontAwesomeIcon
                icon={faEraser}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "eraser_btn" ? "d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>

            <button id="input_btn" onClick={handleFileButtonClick}>
              <FontAwesomeIcon
                icon={farImage}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: "#7b716e",
                  pointerEvents: "none",
                }}
              />
            </button>
            <input
              ref={fileRef}
              type="file"
              id="input_file"
              name="file"
              accept="image/*"
              hidden={true}
              onChange={handleInsertImage}
            />

            <span id="range_span">
              <input
                id="lineWeightRange"
                type="range"
                min="0.1"
                max="15"
                defaultValue={"3"}
                step="0.1"
                onChange={handleRangeChange}
              />
            </span>

            {/* <button
              type="button"
              className="input_file_button"
              onClick={handleFileUpload}
            >
              upload
            </button> */}
          </span>
        </section>
        <section id="colors">
          {arr_Colors.map((color) => (
            <span
              className="color"
              key={uniqueId()}
              style={{ backgroundColor: `${color}` }}
              onClick={handleColorClick}
            ></span>
          ))}
        </section>

        <section style={{ position: "relative" }}>
          <canvas
            id="canvas"
            ref={canvasRef}
            width={`${CANVAS_WIDTH}`}
            height={`${CANVAS_HEIGHT}`}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
            onClick={handleCanvasClick}
            onContextMenu={disableRightClick}
          ></canvas>
        </section>
      </div>
    );
  } else {
    return (
      <div id="canvas_wrapper">
        <section id="controls">
          <span className="control_btns">
            <button id="clearBtn" onClick={handleClearClick}>
              <FontAwesomeIcon
                icon={farStickyNote}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: "#7b716e",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="paint_btn"
              onClick={(e) => {
                handlePaintClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "paint_btn" ? "#7b716e" : "#f2ede3", //자기 엘리먼트에 id를 불러오는 방법없나?
              }}
            >
              <FontAwesomeIcon
                icon={faPaintBrush}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "paint_btn" ? "#d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="fill_btn"
              onClick={(e) => {
                handleFillClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "fill_btn" ? "#7b716e" : "#f2ede3",
              }}
            >
              <FontAwesomeIcon
                icon={faFillDrip}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "fill_btn" ? "#d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>
            <button
              id="eraser_btn"
              onClick={(e) => {
                handleEraserClick();
                buttonClickHandler(e);
              }}
              style={{
                backgroundColor:
                  buttonClicked === "eraser_btn" ? "#7b716e" : "#f2ede3",
              }}
            >
              <FontAwesomeIcon
                icon={faEraser}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: buttonClicked === "eraser_btn" ? "d4c7b1" : "#555",
                  pointerEvents: "none",
                }}
              />
            </button>

            <button id="input_btn" onClick={handleFileButtonClick}>
              <FontAwesomeIcon
                icon={farImage}
                style={{
                  fontSize: 20,
                  border: "none",
                  padding: "0 0",
                  color: "#7b716e",
                  pointerEvents: "none",
                }}
              />
            </button>
            <input
              ref={fileRef}
              type="file"
              id="input_file"
              name="file"
              accept="image/*"
              hidden={true}
              onChange={handleInsertImage}
            />

            <span id="range_span">
              <input
                id="lineWeightRange"
                type="range"
                min="0.1"
                max="15"
                defaultValue={"3"}
                step="0.1"
                onChange={handleRangeChange}
              />
            </span>

            {/* <button
              type="button"
              className="input_file_button"
              onClick={handleFileUpload}
            >
              upload
            </button> */}
          </span>
        </section>
        <section id="colors">
          {arr_Colors.map((color) => (
            <span
              className="color"
              key={uniqueId()}
              style={{ backgroundColor: `${color}` }}
              onClick={handleColorClick}
            ></span>
          ))}
        </section>

        <section style={{ position: "relative" }}>
          <canvas
            id="canvas"
            ref={canvasRef}
            width={`${CANVAS_WIDTH}`}
            height={`${CANVAS_HEIGHT}`}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
            onClick={handleCanvasClick}
            onContextMenu={disableRightClick}
          ></canvas>

          {/* <button id="music_btn" onClick={musicModalOnOff}>
            <FontAwesomeIcon
              icon={faMusic}
              style={{
                color: "#7a706d",
                fontSize: 20,
                border: "none",
                pointerEvents: "none",
              }}
            />
          </button>

          <button id="music_btn_up" onClick={musicModalOnOff}>
            <FontAwesomeIcon
              icon={faMusic}
              style={{
                color: "#7a706d",
                fontSize: 20,
                border: "none",
                pointerEvents: "none",
              }}
            />
          </button> */}
        </section>
      </div>
    );
  }
};

export default React.memo(Painting);

// function handleFileUpload() {
//   canvasRef.current.toBlob(
//     function (blob) {
//       const img = new FormData();
//       img.append("file", blob, `${Date.now()}.jpeg`);
//       console.log(blob);

//       const param = {
//         Bucket: "oneulfile",
//         Key: "image/" + "abc",
//         ACL: "public-read",
//         Body: blob,
//         ContentType: "image/",
//       };

//       s3.upload(param, function (err, data) {
//         console.log(err);
//         console.log(data);
//       });
//     },
//     "image/jpeg",
//     0.8
//   );
// }

// S3에 파일 저장 , 이름은 닉네임 + date.now()
// 저장 후 URL응답 받아서 서버에 다른 데이터들과 함께 전달.
